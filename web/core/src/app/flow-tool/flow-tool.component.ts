import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FlowItem, IFlowItem, ItemTypes } from './item/item.model';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'ql-flow-tool',
  templateUrl: './flow-tool.component.html',
  styleUrls: ['./flow-tool.component.less']
})
export class FlowToolComponent implements OnInit, AfterViewChecked {
  @ViewChild('canvas')
  canvasEl!: ElementRef<HTMLElement>;
  @ViewChild('flowItem')
  flowItemEl!: ElementRef<HTMLElement>;
  visible = false;
  flowData: Array<IFlowItem> = [];
  count: number = 0;
  itemTypes: typeof ItemTypes = ItemTypes;
  currentItem !: IFlowItem;
  confirmModal?: NzModalRef;
  workFlow: any;
  constructor(private modal: NzModalService) {

  }

  ngOnInit(): void {
    if (this.flowData.length === 0) {
      this.count++;
      this.currentItem = new FlowItem(this.count, 'Event', this.itemTypes.EVENT, {});
      this.currentItem.childs = [];
      this.open();
    }
  }

  // Open Side model for logic.
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  addItem(event: any) {
    this.count = this.flowData.length + 1;
    this.currentItem = new FlowItem(this.count, event.description, event.type, {}, event.parentId);
    this.currentItem.childs = [];
    this.open();
  }

  viewItem(event: any) {
    this.currentItem = this.flowData.filter((each) => each.id === event.id)[0];
    this.open();
  }

  // Below methods used to append and delete childs of an parent item.
  addChildsToParent(event: any): void {
    const parentIndex = this.flowData.findIndex((each: any) => each.id === event.parentId);
    const children = this.flowData[parentIndex];
    if (children.childs) {
      this.flowData[parentIndex].childs.push({ childId: this.count, type: event.type });
    }
  }

  removeParentChilds(event: any): void {
    const parentIndex = this.flowData.findIndex((each: any) => each.id === event.parentId);
    const children = this.flowData[parentIndex];
    if (children.childs && children.childs.length > 0) {
      this.flowData[parentIndex].childs = this.flowData[parentIndex].childs.filter((child: any) => child.childId !== event.id);
    }
  }

  // Below methods will add and remove values to flowData.
  removeItem(event: any) {
    this.currentItem = this.flowData.filter((each) => each.id === event.id)[0];
    if (this.currentItem) {
      this.confirmModal = this.modal.confirm({
        nzTitle: `Do you Want to delete these items?`,
        nzContent: `On deletion of item will remove all child logic associated to it.`,
        nzOnOk: () =>
          new Promise((resolve, reject) => {
            this.deleteItem(this.currentItem).then(res => {
              resolve(true);
              if (this.visible) {
                this.close();
              }
            });
          }).catch(() => console.log('Oops errors!'))
      });
    } else if (this.visible) {
      this.close();
    }
  }

  async deleteItem(item: any): Promise<any> {
    this.removeParentChilds(item);
    if (item.childs.length > 0) {
      this.removeChildsAndSubsequentItems(item);
    }
    this.flowData = this.flowData.filter((each) => each.id !== item.id);
  }

  removeChildsAndSubsequentItems(item: any): void {
    if (item.childs.length > 0) {
      item.childs.forEach((element: IFlowItem) => {
        const childElement = this.flowData.filter(each => each.id === element['childId'])[0];
        if (childElement.childs.length > 0) {
          this.removeChildsAndSubsequentItems(childElement);
        } else {
          this.flowData = this.flowData.filter(each => each.id !== childElement.id);
        }
      });
    } else {
      this.flowData = this.flowData.filter(each => each.id !== item.id);
    }
  }

  saveItem(): void {
    if (this.currentItem.type !== this.itemTypes.EVENT) {
      this.addChildsToParent(this.currentItem);
    }
    this.renderToCanvas();
  }

  //  Below methods will be used to render data to canvas
  renderToCanvas(): void {
    this.currentItem.visible = true;
    delete this.currentItem['parentIndex'];
    if (this.flowData.filter(each => each.id === this.currentItem.id).length === 0) {
      this.flowData.push(this.currentItem);
    } else {
      this.flowData[this.flowData.findIndex(each => each.id === this.currentItem.id)] = this.currentItem;
    }
    this.close();
  }

  ngAfterViewChecked() {
    this.reOrderItems();
  }

  reOrderItems() {
    const renderedItems = [];
    this.flowData.forEach((item: IFlowItem, index) => {
      if (!item.parentId) {
        this.flowData[index].styles = {
          card: {
            top: '150px',
            left: '150px'
          }
        };
        if (item.childs.length > 0) {
          this.attachArrows(item, index);
        }
      } else {
        this.appendToParentFlow(item, index);
      }
    });

    console.log(JSON.stringify(this.flowData));
  }

  appendToParentFlow(item: any, index: any): void {
    const parentData = this.flowData.filter(each => each.id === item.parentId)[0];
    if (parentData) {
      const parentElement = <HTMLInputElement>document.getElementById(`qlitem${item.parentId}`);
      const viewPort = parentElement.getBoundingClientRect();
      if (parentData.childs.length > 0) {
        const childIndex = parentData.childs.findIndex((child: any) => child.childId === item.id);
        const parentArrowElement = <HTMLInputElement>document.getElementById(`qlitem${item.parentId}-arrow${childIndex + 1}`);
        const parentArrowViewPort = parentArrowElement.getBoundingClientRect();
        console.log(parentArrowViewPort);
        if (childIndex === 0) {
          this.flowData[index].styles = {
            card: {
              left: `${viewPort.left + viewPort.width + parentArrowViewPort.width}px`,
              top: `${viewPort.top - 60}px`
            }
          };
        } else {
          this.flowData[index].styles = {
            card: {
              left: `${viewPort.left}px`,
              top: `${viewPort.top + viewPort.height + parentArrowViewPort.height - 60}px`
            }
          };
        }
      }
    }

    if (item.childs.length > 0) {
      this.attachArrows(item, index);
    }
  }

  attachArrows(item: IFlowItem, index: number): void {
    const currentElement = <HTMLInputElement>document.getElementById(`qlitem${item.id}`);
    const currentViewPort = currentElement.getBoundingClientRect();
    if (item.childs.length > 0) {
      this.flowData[index].styles.right = {
        top: `${currentViewPort.height / 2}px`,
        left: `${currentViewPort.width}px`,
      }
    }
    if (item.type === this.itemTypes.CONDITION && item.childs.length > 1) {
      this.flowData[index].styles.bottom = {
        top: `${currentViewPort.height}px`,
        left: `${currentViewPort.width / 2}px`
      }
    }
  }
}
