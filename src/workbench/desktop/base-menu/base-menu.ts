import type { MenuGroupService } from '@cosmic/workbench/services/menu-group-service';
import type { Menu, MenuItemConfig } from '../menu';

export class BaseMenu {
    private menuInstance!: Menu;
    constructor(private groupMenuService: MenuGroupService, menuItems: Array<MenuItemConfig>) {
        this.groupMenuService = groupMenuService;

    }

    public initMenu(menuItems: Array<MenuItemConfig>):void {
        this.menuInstance = this.groupMenuService.getMenuInsatance();
        this.menuInstance.init('文件', menuItems);
        
    }

}