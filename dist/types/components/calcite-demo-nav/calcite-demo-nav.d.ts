interface NavItem {
    id: string;
    path: string;
    content: any;
}
export declare class CalciteDemoNav {
    pageId: string;
    root: string;
    renderNavItem(item: NavItem): any;
    render(): any;
}
export {};
