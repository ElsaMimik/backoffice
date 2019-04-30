import { spiltPath } from './menu'

// export component 權限 router.beforeEach 檢查
const component = [
    {
        apiPath: '/member',
        routerName: 'member',
    },
    {
        apiPath: '/member',
        routerName: 'member-detail',
    }
]

// router.beforeEach 檢查
const checkPageAuth = (to: any, apiPaths: Array<string>) => {
    spiltPath(apiPaths);
    const componentInfo = component.find(s => s.routerName === to);
    if (componentInfo) {
        return apiPaths.includes(componentInfo.apiPath);
    }
}

export { checkPageAuth };