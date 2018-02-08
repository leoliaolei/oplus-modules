/*! oplus-jat 0.1.0 built at 2018-02-07T01:16:17.719Z*/
angular.module("oplus.jat",["oplus.commons","oplus.dts"]),function(){"use strict";function t(t){t.state("app.jat",{url:"/jat",templateUrl:"app/modules/jat/template-list.html",controller:"TemplateListCtrl"}).state("app.jat_template_new",{url:"/jat/datasources/:datasourceName/templates/new",templateUrl:"app/modules/jat/template-edit.html",controller:"TemplateEditCtrl"}).state("app.jat_template_edit",{url:"/jat/templates/:id/edit",templateUrl:"app/modules/jat/template-edit.html",controller:"TemplateEditCtrl"})}angular.module("oplus.jat").config(["$stateProvider",function(e){t(e)}])}(),function(){"use strict";function t(t,e,a,n){this.findWidgetJobs=a.findAllTemplates,this.startJob=e.startJob,this.pauseJob=e.pauseJob,this.stopJob=e.stopJob}angular.module("oplus.jat").service("jobService",t),t.$inject=["$q","jobDao","templateDao","messageService"]}(),function(){"use strict";angular.module("oplus.jat").component("jobSelector",{bindings:{selectedJob:"=",theModel:"="},templateUrl:"app/modules/jat/job-selector.html",controller:["$scope","jobService",function(t,e){var a=this;t.$watch("$ctrl.theModel",function(t,e){a.selectedJob=t?_.find(a.jobs,{code:t}):void 0}),e.findWidgetJobs().then(function(t){angular.isArray(t)?a.jobs=t:a.jobs=t.records,a.selectedJob=a.theModel?_.find(a.jobs,{code:a.theModel}):void 0}).catch(function(t){throw t})}]})}(),function(){"use strict";function t(){var t=!1;this.useLocalDb=function(e){t=e},this.$get=["_jobLocalDao","_jobRemoteDao",function(e,a){return t?e:a}]}angular.module("oplus.jat").provider("jobDao",t),t.$inject=[]}(),function(){"use strict";function t(t,e,a){e.createDao("oplus.jats");this.findAllTemplates=function(){var e=t.defer();return a.readWorksheet("T_JOBS").then(function(t){t.records.forEach(function(t){t.paramsConfig=jsonic(t.paramsConfig)}),e.resolve(t)}).catch(function(t){e.reject(t)}),e.promise}}angular.module("oplus.jat").service("_jobLocalDao",t),t.$inject=["$q","localDaoFactory","excelMockData"]}(),function(){"use strict";function t(t){this.startJob=function(e,a){return t.callApi("jat","POST","/api/jat/jobs/{code}/start",{code:e},a)},this.pauseJob=function(e){return t.callApi("jat","GET","/api/jat/jobs/{code}/pause",{code:e})},this.stopJob=function(e){return t.callApi("jat","GET","/api/jat/jobs/{code}/stop",{code:e})}}angular.module("oplus.jat").service("_jobRemoteDao",t),t.$inject=["restUtils"]}(),function(){"use strict";function t(t,e,a){function n(){a.findAllDatasources().then(function(e){t.datasources=e}).catch(function(t){throw t})}t.deleteTemplate=function(t){e.confirm("删除","确认删除作业"+t.name+"？",function(){a.deleteTemplate(t.id).then(function(){n()})},function(){})},n()}angular.module("oplus.jat").controller("TemplateListCtrl",t),t.$inject=["$scope","messageService","templateService"]}(),function(){"use strict";function t(t,e,a,n,l,o,s){function i(){o.findAllDatasources().then(function(e){t.datasources=e,t.selectedDatasource=t.datasources.find(function(e){return e.name===t.template.datasource})})}var c=n.id,r=n.datasourceName;t.editing=!1,t.cmOption={lineNumbers:!0,lineWrapping:!0,indentWithTabs:!0,theme:"solarized dark",mode:"sql"},t.saveTemplate=function(){t.template.datasource=t.selectedDatasource.name,t.template.type=t.selectedDatasource.type,o.saveTemplate(t.template).then(function(e){l.toast("success","Saved"),t.template=e}).catch(function(t){l.alertError("失败",t.message)})},t.deleteTemplate=function(t){o.deleteTemplate(t).then(function(){a.go("app.jat")})},t.copyTemplate=function(){l.prompt("","请输入code","",function(t){o.copyTemplate(c,t).then(function(t){l.toast("success","copyed"),a.go("app.jat")})},"")},t.queryParams=function(){o.queryParams(t.template.query).then(function(e){t.template.paramsConfig=e}).catch(function(t){l.alertError("失败",t.message)})},t.addQueryParam=function(){t.template.paramsConfig=t.template.paramsConfig||{},t.template.paramsConfig[""]={}},t.removeQueryParam=function(e){delete t.template.paramsConfig[e]},t.changeParam=function(e,a){var n=0,l={};angular.forEach(t.template.paramsConfig,function(t,o){e==n?l[a]=t:l[o]=t,n++}),t.template.paramsConfig=l},t.startJob=function(){if(t.template.id){var e={};angular.forEach(t.template.paramsConfig,function(t,a){e[a]=t.defaultValue}),s.startJob(t.template.code,e).then(function(e){t.jobResult=angular.toJson(e)}).catch(function(t){l.alertError("失败",t.message)})}else l.toast("info","请先保存数据集。")},function(e){e?(t.editing=!0,o.findTemplate(e).then(function(e){t.template=e,i()}).catch(function(t){throw t})):(t.template={datasource:r},i())}(c)}angular.module("oplus.jat").controller("TemplateEditCtrl",t),t.$inject=["$scope","$compile","$state","$stateParams","messageService","templateService","jobService"]}(),function(){"use strict";function t(t){this.findAllTemplates=t.findAllTemplates,this.findTemplate=t.findTemplate,this.saveTemplate=t.saveTemplate,this.deleteTemplate=t.deleteTemplate,this.findAllDatasources=t.findAllDatasources,this.copyTemplate=t.copyTemplate,this.queryParams=t.queryParams}angular.module("oplus.jat").service("templateService",t),t.$inject=["templateDao"]}(),function(){"use strict";function t(){var t=!1;this.useLocalDb=function(e){t=e},this.$get=["_templateLocalDao","_templateRemoteDao",function(e,a){return t?e:a}]}angular.module("oplus.jat").provider("templateDao",t),t.$inject=[]}(),function(){"use strict";function t(t,e,a){this.findAllTemplates=function(){var e=t.defer();return a.readWorksheet("T_JOBS").then(function(t){t.records.forEach(function(t){t.paramsConfig=jsonic(t.paramsConfig)}),e.resolve(t)}).catch(function(t){e.reject(t)}),e.promise}}angular.module("oplus.jat").service("_templateLocalDao",t),t.$inject=["$q","localDaoFactory","excelMockData"]}(),function(){"use strict";function t(t){this.findAllTemplates=function(){return t.callApi("jat","GET","/api/jat/job-templates")},this.findTemplate=function(e){return t.callApi("jat","GET","/api/jat/job-templates/{id}",{id:e})},this.saveTemplate=function(e){return e.id?t.callApi("jat","PUT","/api/jat/job-templates",null,e):t.callApi("jat","POST","/api/jat/job-templates",null,e)},this.deleteTemplate=function(e){return t.callApi("jat","DELETE","/api/jat/job-templates/{id}",{id:e})},this.findAllDatasources=function(){return t.callApi("jat","GET","/api/jat/datasources")},this.copyTemplate=function(e,a){return t.callApi("jat","GET","/api/jat/job-templates/copy/{id}",{id:e},{code:a})},this.queryParams=function(e){return t.callApi("jat","POST","/api/jat/job-templates/params?sql={sql}",{sql:e})}}angular.module("oplus.jat").service("_templateRemoteDao",t),t.$inject=["restUtils"]}(),function(t){try{t=angular.module("oplus.jat")}catch(e){t=angular.module("oplus.jat",[])}t.run(["$templateCache",function(t){"use strict";t.put("app/modules/jat/job-selector.html",'<div class="form-group">\n    <label class="control-label col-sm-2">选择作业</label>\n    <div class="col-sm-10">\n        <select chosen class="form-control" ng-model="$ctrl.theModel"\n                ng-options="job.code as job.name for job in $ctrl.jobs">\n        </select>\n    </div>\n</div>\n\n'),t.put("app/modules/jat/template-edit.html",'<nav class="navbar navbar-default b-b">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <ol class="breadcrumb">\n                <li>\n                    <a ui-sref="app.jat">作业模板</a>\n                </li>\n                <li class="active">\n                    编辑作业模板\n                </li>\n            </ol>\n        </div>\n    </div>\n</nav>\n\n<div class="wrapper">\n    <div class="row">\n        <div class="col-md-12">\n            <form class="form-horizontal panel panel-default" ng-submit="saveTemplate()">\n                <div class="panel-heading clearfix">\n                    <div class="pull-right">\n                        <div class="btn-group" dropdown>\n                            <button type="button" class="btn btn-default" data-toggle="dropdown">\n                                <i class="fa fa-ellipsis-v"></i>\n                            </button>\n                            <ul class="dropdown-menu" role="menu">\n                                <li>\n                                    <a ng-click="copyTemplate(template.id)"><i class="fa fa-copy"></i> 复制</a>\n                                </li>\n                                <li>\n                                    <a ng-click="deleteTemplate(template.id)"><i class="fa fa-remove"></i> 删除</a>\n                                </li>\n                                <li></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="panel-body">\n\n                    <div class="form-group">\n                        <label class="col-sm-2 control-label" for="f_code">\n                            code (唯一)*\n                        </label>\n                        <div class="col-sm-10">\n                            <input ng-readonly="editing" ng-model="template.code" class="form-control" id="f_code">\n                        </div>\n                    </div>\n\n                    <div class="form-group">\n                        <label class="col-sm-2 control-label" for="f_name" required>名称 *</label>\n                        <div class="col-sm-10">\n                            <input ng-model="template.name" class="form-control" id="f_name">\n                        </div>\n                    </div>\n\n                    <div class="form-group">\n                        <label class="col-sm-2 control-label" for="f_description">说明</label>\n                        <div class="col-sm-10">\n                            <textarea type="text" ng-model="template.description" class="form-control" id="f_description"\n                                      rows="3"></textarea>\n                        </div>\n                    </div>\n\n                    <div class="form-group">\n                        <label class="col-sm-2 control-label" for="f_datasource" required>数据源 *</label>\n                        <div class="col-sm-10">\n                            <select  ng-model="selectedDatasource" class="form-control" id="f_datasource"\n                                     ng-options="ds as ds.name +\' [\' + ds.type + \']\' for ds in datasources"></select>\n                        </div>\n                    </div>\n\n                    <div ng-if="selectedDatasource.type != \'\' && selectedDatasource.type != null" ng-include="\'app/modules/jat/template-query-\'+selectedDatasource.type+\'.html\'"></div>\n\n                    <div class="form-group">\n                        <div class="col-sm-10 col-sm-offset-2">\n                            <button type="button" ng-click="startJob()" class="btn btn-primary pull-right">执行测试查询\n                            </button>\n                            <button class="btn btn-success">保存</button>\n                            <button type="button" class="btn btn-default" ui-sref="app.jat">取消</button>\n                        </div>\n                    </div>\n\n                    <div class="form-group">\n\n                        <label class="col-sm-2 control-label">\n                            测试结果\n                        </label>\n\n                        <div class="col-sm-10" >\n                             <textarea ui-codemirror="{mode:\'application/json\',\n                              lineNumbers:true,\n                              theme:\'solarized dark\',\n                              lineWrapping:true\n                              }"\n                                       xclass="form-control code" rows="1"  ng-model="jobResult"></textarea>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>'),t.put("app/modules/jat/template-list.html",'<nav class="navbar navbar-default b-b">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <ol class="breadcrumb">\n                <li class="active">作业模板</li>\n            </ol>\n        </div>\n    </div>\n</nav>\n\n<div class="wrapper">\n    <div xclass="panel-body">\n        <div class="list-group">\n            <div ng-if="datasources.length===0" class="list-group-item vbox">\n                <div class="op-blank-wrapper">\n                    <div class="op-blank-content">\n                        <i class="fa fa-inbox"></i>\n                        <p>还没有定义任何数据源</p>\n                    </div>\n                </div>\n            </div>\n            <div ng-repeat="datasource in datasources" class="list-group-item clearfix">\n\n                <div class="pull-left bg-light text-center img-circle m-r" style="width:48px">\n                    <i class="fa fa-2x fa-datasource-{{::datasource.type}}" style="line-height:48px"\n                       title="{{::datasource.type}}"></i>\n                </div>\n\n                <div class="pull-right">\n                    <a class="btn btn-default" ui-sref="app.jat_template_new({datasourceName:datasource.name})"><i\n                            class="fa fa-cube" title="新建数据集"></i> </a>\n                </div>\n\n                <div class="clear">\n                    <span class="h4"> {{::datasource.name}}</span>\n                    <div class="m-t-sm">\n                        <ul class="list list-unstyled inline m-b-xs" ng-repeat="template in datasource.jobTemplateDTOList">\n                            <li class="m-r"><a class="label label-default"\n                                               ui-sref="app.jat_template_edit({id:template.id})">{{template.name}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n'),t.put("app/modules/jat/template-query-jdbc.html",'\x3c!--<div class="form-group">\n    <label class="col-sm-2 control-label" for="is_proc" required>是否存储过程 *</label>\n    <div class="col-sm-10">\n        <div class="checkbox" id="is_proc">\n            <label class="i-checks">\n                <input type="checkbox" ng-model="template.options.proc" class="ng-valid ng-dirty ng-valid-parse ng-touched ng-empty" style=""><i></i></label>\n        </div>\n    </div>\n</div>--\x3e\n\n<div class="form-group">\n    <label class="col-sm-2 control-label" for="input_query" required>查询SQL *</label>\n    <div class="col-sm-10">\n        <textarea ui-codemirror="{mode:\'text/x-sql\', lineNumbers:true, theme:\'solarized dark\', lineWrapping:true}"\n                  xclass="form-control code" rows="6" id="input_query" ng-model="template.query"></textarea>\n    </div>\n</div>\n\n<div class="form-group">\n    <div class="col-sm-10 col-sm-offset-2">\n        <button type="button" ng-click="queryParams()" class="btn btn-primary pull-right">获取参数</button>\n    </div>\n</div>\n\n<div class="form-group">\n    <label class="col-sm-2 control-label">查询参数</label>\n    <div class="col-sm-10">\n        <table class="table op-param-table">\n            <thead>\n            <tr>\n                <th>参数\n                    <button type="button" class="btn btn-xs btn-primary" ng-click="addQueryParam()" title="添加参数"><i\n                            class="fa fa-plus"></i></button>\n                </th>\n                <th>类型</th>\n                <th>测试值</th>\n                <th>说明</th>\n                <th>必需</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat="(name,detail) in template.paramsConfig track by $index">\n\n                <td><input type="text" class="form-control" ng-model="name" ng-change="changeParam($index,name)"></td>\n                <td>\n                    <select class="form-control" ng-model="detail.type">\n                        <option value="String">String</option>\n                        <option value="Number">Number</option>\n                        <option value="Date">Date</option>\n                        <option value="Boolean">Boolean</option>\n                    </select>\n                </td>\n                <td><input type="text" class="form-control" ng-model="detail.defaultValue"></td>\n                <td><input type="text" class="form-control" ng-model="detail.desc"></td>\n                <td><label class="i-checks m-b-none"><input type="checkbox" name="display_panel"\n                                                            ng-model="detail.required"><i></i></label>\n                </td>\n                <td>\n                    <button type="button" class="btn btn-default" ng-click="removeQueryParam(name)"><i\n                            class="fa fa-remove"></i></button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n')}])}();