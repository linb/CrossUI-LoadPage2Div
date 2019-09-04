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
                .setLeft("42.5em")
                .setTop("3.3333333333333335em")
                .setCaption("Load an web page into div")
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
                .setLeft("40.833333333333336em")
                .setTop("6.666666666666667em")
                .setWidth("25.833333333333332em")
                .setHeight("23.333333333333332em")
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element2")
                .setLeft("3.3333333333333335em")
                .setTop("6.666666666666667em")
                .setWidth("28.833333333333332em")
                .setHeight("16.833333333333332em")
                .setNodeName("iframe")
                .setAttributes({
                    "name":"abc_def"
                })
            );
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link5")
                .setLeft("4.166666666666667em")
                .setTop("3.3333333333333335em")
                .setCaption("Load web page into an iframe")
                .setHref("//crossui.com")
                .setTarget("abc_def")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        customAppend : function(parent, subId, left, top){
            return false;
        }
    }
});