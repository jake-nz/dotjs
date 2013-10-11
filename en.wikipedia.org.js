// Metricise Wikipedia!
// "23m (16 foots)" => "23m"
// "29 pounds (34kg)" => "34kg"

// TODO:
// * convert where there is no metric
// * suggest edits with conversion

(function(){
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
        node;
    while(node = walker.nextNode()){
        var text = node.nodeValue;
        if(!text || text == ' '){
            continue;
        }

        // remove stupid units in parenthasis
        text = text.replace(/\s?\(.*?((cubic|square)\s)?(inch|inches|foot|feet|ft|yard|mile|mi|lb|pound)s?\)/ig, "");

        // remove nonsence units where they preced real ones in parenthasis, remove parenthasis
        text = text.replace(/(\d+\s?((cubic|square)\s)?(inch|inches|foot|feet|ft|yard|mile|mi|lb|pound)s?\s)?\d+\s?((cubic|square)\s)?(inch|inches|foot|feet|ft|yard|mile|mi|lb|pound)s?\s?\((.*?)\)/ig, "$4");

        node.replaceWholeText(text);
    }
})();

