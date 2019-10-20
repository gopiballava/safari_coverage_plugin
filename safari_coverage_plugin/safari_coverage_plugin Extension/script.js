function handleMessage(event) {
    console.log(event.name);
    console.log(event.message);
    if(event.name == "executeThis")
    {
        eval(event.message["js_code"]);
    }
    //console.log(event.message)
}

document.addEventListener("DOMContentLoaded", function(event)
{
    console.log("Hello world! v1.004");
    safari.extension.dispatchMessage("DOMContentLoaded",  { "key": "value" });
});

safari.self.addEventListener("message", handleMessage);
