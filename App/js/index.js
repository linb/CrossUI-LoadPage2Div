xui.Class('App', 'xui.Module',{
    Instance:{
        Dependencies:[],
        Required:[],

        properties : {},

        initialize : function(){
        },

        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link1")
                .setLeft("21.666666666666668em")
                .setTop("3.3333333333333335em")
                .setCaption("Load google.com into div")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_div17",
                        "args":[
                            {
                                "iframeAutoLoad":"//www.crossui.com"
                            },
                            { }
                        ],
                        "method":"setProperties",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div17")
                .setLeft("15em")
                .setTop("8.333333333333334em")
                .setWidth("41.666666666666664em")
                .setHeight("23.333333333333332em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        customAppend : function(parent, subId, left, top){
            return false;
        }
    }
});