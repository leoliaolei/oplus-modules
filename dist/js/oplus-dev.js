/*! oplus-dev $VERSION built at 2018-02-05T14:26:39.506Z*/
!function(){"use strict";angular.module("oplus.dev",["oplus.udp","oplus.uaa","oplus.dts"])}(),function(){"use strict";function e(e){e.state("app.dev",{url:"/dev",views:{"":{templateUrl:"app/modules/dev/dev-index.html"}}}).state("app.dev.component",{url:"/:component",views:{component:{templateUrl:function(e){return"app/modules/dev/dev-"+e.component+".html"},controller:"DevTestCtrl"}}})}angular.module("oplus.dev").config(["$stateProvider",function(n){e(n)}])}(),function(){"use strict";function DevTestCtrl($scope,datasetService,$stateParams,dataEx,uaaService){function dataex(){$scope.valueObject={year:2004,series:"Supremacy",name:"The Bourne"},$scope.fnExp='js:{film:"${name} ${series}"}',$scope.fnExp='js:{film:${name}+" "+${series},year:${year}}',$scope.fnExp='js:function(){return {film:${name}+" "+${series},year:${year}}}()',$scope.convert=function(){$scope.result=dataEx.evaluateByFieldVar($scope.fnExp,$scope.valueObject),console.log($scope.result)},$scope.convert()}function pivot(){$scope.tableProps={dataset:{id:"交叉数据"},fields:[{field:"Mounted"},{field:"Date"},{field:"Total Sz"},{field:"Free Sz"},{field:"%used"}]},$scope.pivotTableProps={dataset:{id:"交叉数据"},pivot:{_enabled:!0,_ver:1,rows:["Date"],columns:["Mounted"],values:["Free Sz"]},fields:[{field:"Mounted"},{field:"Date"},{field:"Total Sz"},{field:"Free Sz"},{field:"%used"}]}}function widgets(){$scope.datasetProps={id:"上证指数相关性"},$scope.selectedDs={},$scope.navProps={items:[{title:"表格",type:"page",link:{pageId:"1503980638114",params:""}},{title:"图形",type:"page",link:{pageId:"15038194354842"},active:!0},{title:"实时数据",type:"page",link:{pageId:"15038194354849"}},{title:"item4",link:{}}],display:{target:"#js-nav-target"}},$scope.kpiProps={dataset:{id:"各省GDP"},kpiName:{field:"地区"},kpiValue:{field:"2015年"},link:"",display:{defaultColor:"bg-light",width:"col-sm-2"}},$scope.jobProps={title:"一键作业",display:{cardMode:!0},job:"mockjob-1",params:[{name:"username",label:"用户名",control:"userlist"},{name:"host",label:"主机",control:"serverlist"},{name:"note",label:"说明",control:"textarea"}]},$scope.linechartProps={yAxis:[{field:"SSE",label:"上证指数"},{field:"CPI",convertFn:"parseFloat(${CPI})"},{field:"1-Yr Int Rate",label:"1年期利率"}],display:{cardMode:!0,pointRadius:1},dataset:{id:"上证指数相关性"},xAxis:{field:"Month",order:"asc",label:"月份"},yAxes:[{field:"SSE",label:"上证指数",position:"left"},{field:"CPI",label:"CPI",position:"right",convertFn:""},{field:"IntRate",label:"1年利率",position:"right",convertFn:""},{label:"CPI-Int",position:"right",convertFn:"${CPI}-${IntRate}"}]},$scope.barchartProps={dataset:{id:"各省GDP"},xAxis:{field:"地区"},yAxes:[{field:"2015年",convertFn:""}]},$scope.piechartProps={dataset:{id:"各省GDP"},xAxis:{field:"地区"},yAxes:[{field:"2015年"}]},$scope.datatableProps={dataset:{id:"各省GDP"},fields:[{name:"地区",label:"地区"},{name:"2015年",label:"2015"},{name:"Action",label:"Action",defaultContent:'<button class="btn btn-default" ng-click="testClick()">Click</button>'}],display:{height:"200px"}},$scope.chinaMapProps={title:"中国地图",dataset:{id:"各省GDP"},xAxis:{field:"地区",label:"地区"},yAxes:[{field:"2015年",label:"2015年GDP",convertFn:""}],display:{cardMode:!0,height:"400px"}},$scope.routeProps={title:"路线图",dataset:{id:"Route"},_fields:{from:{field:"FROM_CITY",convertFn:""},to:{field:"TO_CITY",convertFn:""},value:{field:"VALUE",convertFn:""}},display:{cardMode:!0,zoomable:!0,height:"400px",mapType:"china"}}}function misc(){$scope.percent=65,$scope.options={animate:{duration:300,enabled:!0},barColor:"#2C3E50",scaleColor:!1,lineWidth:3,lineCap:"circle"}}function uaa(){var e=$scope.$root;$scope.authenticate=function(){e.setUserInfo({loginId:"devadmin",displayName:"Admin",roles:[],permissions:[]})},$scope.logout=function(){e.clearUserInfo()}}var component=$stateParams.component;if(component)try{eval(component+"()")}catch(e){console.warn(e.message)}}angular.module("oplus.dev").controller("DevTestCtrl",DevTestCtrl),DevTestCtrl.$inject=["$scope","datasetService","$stateParams","dataEx","uaaService"]}(),function(e){try{e=angular.module("oplus.dev")}catch(n){e=angular.module("oplus.dev",[])}e.run(["$templateCache",function(e){"use strict";e.put("app/modules/dev/dev-css.html",'<style>\n    .form-inline .form-control-wrapper {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle;\n        margin-right: 16px;\n    }\n\n    .control-label {\n        margin-right: 8px;\n    }\n\n    .form-horizontal .form-group {\n        display: flex;\n    }\n\n    .form-horizontal .control-label {\n        width: 8em;\n    }\n\n    .form-horizontal .form-control-wrapper {\n        flex: 1;\n    }\n\n    .form-horizontal .form-group {\n        margin-left: 0;\n        margin-right: 0;\n    }\n</style>\n<h4>Inline Form</h4>\n<form class="form-inline">\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n</form>\n<h4>Horizontal Form</h4>\n<form class="form-horizontal">\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n</form>\n<h4>Vertical Form</h4>\n<form class="form-vertical">\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n    <div class="form-group">\n        <label class="control-label">Label</label>\n        <div class="form-control-wrapper"><input type="text" class="form-control"></div>\n    </div>\n</form>\n'),e.put("app/modules/dev/dev-dataex.html",""),e.put("app/modules/dev/dev-index.html",'<nav class="navbar navbar-default b-b">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <ol class="breadcrumb">\n                <li class="active">开发测试</li>\n            </ol>\n        </div>\n        <ul class="nav navbar-nav"\n            ng-init="components=[\'css\',\'widgets\',\'pivot\',\'dataex\',\'misc\',\'uaa\']">\n            <li ng-repeat="com in ::components track by $index">\n                <a ui-sref="app.dev.component({component:com})">{{::com}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class="hbox wrapper" ui-view="component">\n</div>\n'),e.put("app/modules/dev/dev-misc.html",'<h3 ng-init="icon=\'fa-rocket\'">Icon Picker</h3>\n<i class="fa fa-4x" ng-class="icon"></i>\n<op-iconpicker ng-model="icon"></op-iconpicker>\n<h3>Color Picker</h3>\n<udp-color-picker ng-model="color"></udp-color-picker>\n<div>Color:<code>{{color}}</code></div>\n<h3 ng-init="">Theme Selector</h3>\n<udp-theme-selector the-model="theTheme" customizable="true"></udp-theme-selector>\n<code>{{theTheme}}</code>\n<h3>Rules</h3>\n<udp-widget-config-format-rule the-model="rules" formats="{theme:true,backColor:true,fontColor:true}"></udp-widget-config-format-rule>\n<code>{{rules}}</code>\n<h3>Easy pie chart</h3>\n<div easypiechart options="options" percent="percent">\n    <span class="percent" ng-bind="percent"></span>\n</div>\n\n<style>\n    .percent {\n        display: inline-block;\n        line-height: 110px;\n        z-index: 2;\n    }\n    .percent:after {\n        content: \'%\';\n        margin-left: 0.1em;\n        font-size: .8em;\n    }\n</style>'),e.put("app/modules/dev/dev-pivot.html",'<div class="row">\n    <div class="col-md-6">\n        <h2>Original</h2>\n        <uwidget uw-type="datatable" uw-props="tableProps"></uwidget>\n    </div>\n\n    <div class="col-md-6">\n        <h2>Pivot</h2>\n        <uwidget uw-type="datatable" uw-props="pivotTableProps"></uwidget>\n    </div>\n</div>'),e.put("app/modules/dev/dev-uaa.html",'<button type="button" class="btn btn-default" ng-click="$root.app.currentUser.authenticate()">Authenticate</button>\n<button type="button" class="btn btn-default" ng-click="$root.app.currentUser.logout()">Log out</button>\nCurrent User: <span class="label label-default">{{$root.app.currentUser}}</span>\n<div class="alert alert-success" ng-if="$root.app.currentUser.isAuthenticated">\n    Only for logged in user\n</div>\n'),e.put("app/modules/dev/dev-widgets.html",'<nav class="navbar navbar-default">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <ol class="breadcrumb">\n                <li class="active">Widget测试</li>\n            </ol>\n        </div>\n    </div>\n</nav>\n<div class="wrapper-md hbox">\n    <uwidget uw-type="text-header">\n        <div class="uw-body">\n            <div class="page-header">\n                <h1>Page for widgets test\n                    <small>uwidget is awesome</small>\n                </h1>\n            </div>\n        </div>\n    </uwidget>\n    <div class="panel panel-default">\n        <div class="panel-body">\n            <uwidget uw-type="nav" uw-props="navProps"></uwidget>\n            <div id="js-nav-target" class="well m-t"></div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-4">\n            <div class="panel panel-default">\n                <div class="panel-heading">Input directive</div>\n                <div class="panel-body">\n                    <udp-input ng-model="model1" control="datepicker" xformat="date" label="DatePicker"\n                               source="urlparam" sourcedef="date1"></udp-input>\n                    <udp-input ng-model="theModel" control="text" label="Text"></udp-input>\n                    <udp-input ng-model="theModel" control="input" xformat="date" label="Input" source="urlparam"\n                               sourcedef="date2"></udp-input>\n                </div>\n                <div class="panel-footer">\n                    <code>{{theModel}}</code>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-8">\n            <div class="panel panel-default">\n\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-6">\n            <div class="panel panel-default">\n                <div class="panel-heading">Routes</div>\n                <div class="panel-body">\n                    <uwidget uw-type="route" uw-props="routeProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{routeProps|json}}</code>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6">\n            <div class="panel panel-default">\n                <div class="panel-heading">China Map</div>\n                <div class="panel-body">\n                    <uwidget uw-type="map" uw-props="chinaMapProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{chinaMapProps|json}}</code>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-5">\n            <div class="panel panel-default">\n                <div class="panel-heading">Push-button Job</div>\n                <div class="panel-body">\n                    <uwidget uw-type="job" uw-props="jobProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{jobProps | json}}</code>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-7">\n            <div class="panel panel-default">\n                <div class="panel-heading">Line Chart</div>\n                <div class="panel-body">\n                    <uwidget uw-type="linechart" uw-props="linechartProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{linechartProps| json}}</code>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-4">\n            <div class="panel panel-default">\n                <div class="panel-heading">Pie Chart</div>\n                <div class="panel-body">\n                    <uwidget uw-type="piechart" uw-props="piechartProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{piechartProps | json}}</code>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-8">\n            <div class="panel panel-default">\n                <div class="panel-heading">Bar Chart</div>\n                <div class="panel-body">\n                    <uwidget uw-type="barchart" uw-props="barchartProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{barchartProps | json}}</code>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6">\n            <div class="panel panel-default">\n                <div class="panel-heading">Table</div>\n                <div class="panel-body">\n                    <uwidget uw-type="datatable" uw-props="datatableProps"></uwidget>\n                </div>\n                <div class="panel-footer">\n                    <code>{{datatableProps | json }}</code>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>')}])}();