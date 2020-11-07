(this["webpackJsonpweb-midi-debug"]=this["webpackJsonpweb-midi-debug"]||[]).push([[0],{40:function(e,t,s){"use strict";s.r(t);var i=s(8),n=s(0),o=s(7),c=s.n(o),r=s(78),a=s(23),h=s(77),u=s(73),d=s(79),l=Object(u.a)({root:{padding:"8pt 16pt",color:"#EEE",backgroundColor:"#333",fontFamily:"Monospace",fontSize:16},label:{}});function v(e){var t=l();return Object(i.jsx)("div",{children:Object(i.jsx)(d.a,{inputProps:{className:t.root},InputLabelProps:{className:t.root},multiline:!0,rows:16,fullWidth:!0,value:e.history.join("\n")})})}var b=s(27),j=s(28),p=function(){function e(t){Object(b.a)(this,e),this.events=[],this.devices={},this.setHistory=void 0,this.setHistory=t,window.navigator.requestMIDIAccess?window.navigator.requestMIDIAccess().then(this.onSuccess.bind(this),this.onError.bind(this)):this.onError("failed to access MIDI devices")}return Object(j.a)(e,[{key:"clearHistory",value:function(){this.events=[],this.setHistory(this.events)}},{key:"onEvent",value:function(e){this.events.push(e.data.join("\t")),this.setHistory(this.events)}},{key:"onError",value:function(e){this.setHistory(["Failed to setup MIDI devices.","Are you using the browser which supports Web MIDI API?","The latest Google Chrome is a recommended browser."])}},{key:"onSuccess",value:function(e){for(var t=e.inputs.values(),s=t.next();!s.done;s=t.next())this.events.push("".concat(s.value.name," ... connected")),this.setHistory(this.events),this.devices[s.value.name]=s.value,s.value.addEventListener("midimessage",this.onEvent.bind(this),!1);0===Object.keys(this.devices).length?(this.events.push("No MIDI devices"),this.setHistory(this.events)):(this.events.push(""),this.events.push("Event\tVal. 1\tVal. 2"))}}]),e}();function y(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),s=t[0],o=t[1],c=Object(n.useState)(!1),r=Object(a.a)(c,2),u=r[0],d=r[1];return Object(n.useEffect)((function(){var e=new p(o);window.document.addEventListener("keydown",(function(t){var s=t.altKey&&"k"===t.key,i=t.ctrlKey&&"k"===t.key;(s||i)&&e.clearHistory()}),!1),d(!0)}),[u]),Object(i.jsx)("div",{children:Object(i.jsxs)(h.a,{maxWidth:"sm",children:[Object(i.jsx)("h1",{children:"Web MIDI Debug"}),Object(i.jsxs)("p",{children:["Press ",Object(i.jsx)("code",{children:"Ctrl-K"})," or ",Object(i.jsx)("code",{children:"Alt-K"})," to clear outputs."]}),Object(i.jsx)(v,{history:s}),Object(i.jsx)("p",{style:{textAlign:"center"},children:Object(i.jsx)("a",{href:"https://github.com/moutend/web-midi-debug",children:"View on GitHub"})})]})})}c.a.render(Object(i.jsxs)("div",{children:[Object(i.jsx)(r.a,{}),Object(i.jsx)(y,{})]}),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7afe7d39.chunk.js.map