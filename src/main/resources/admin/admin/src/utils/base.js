const base = {
    get() {
        return {
            url : "http://localhost:8080/jiankangyinshi/",
            name: "jiankangyinshi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiankangyinshi/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Spring Boot的饮食健康管理系统"
        } 
    }
}
export default base
