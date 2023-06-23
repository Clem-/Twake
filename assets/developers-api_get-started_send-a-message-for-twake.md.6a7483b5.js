import{_ as e,c as a,o as s,a as t}from"./app.73ebf130.js";const g=JSON.parse('{"title":"Send a message with your application","description":"Send a message through API","frontmatter":{"description":"Send a message through API"},"headers":[{"level":2,"title":"Prerequisites:","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Steps:","slug":"steps","link":"#steps","children":[{"level":3,"title":"1. Send message as a new Thread","slug":"_1-send-message-as-a-new-thread","link":"#_1-send-message-as-a-new-thread","children":[]},{"level":3,"title":"2. Send message as a Thread answer","slug":"_2-send-message-as-a-thread-answer","link":"#_2-send-message-as-a-thread-answer","children":[]},{"level":3,"title":"3. Applications can send customized messages","slug":"_3-applications-can-send-customized-messages","link":"#_3-applications-can-send-customized-messages","children":[]}]}],"relativePath":"developers-api/get-started/send-a-message-for-twake.md"}'),i={name:"developers-api/get-started/send-a-message-for-twake.md"},n=t('<h1 id="send-a-message-with-your-application" tabindex="-1">Send a message with your application <a class="header-anchor" href="#send-a-message-with-your-application" aria-hidden="true">#</a></h1><p><br> Introduction: <a href="#introduction" id="introduction"></a></p><hr><p>This guide will introduce you to send message with your application in Twake.</p><h2 id="prerequisites" tabindex="-1">Prerequisites: <a href="#prerequisites" id="prerequisites"></a> <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><ul><li>You have already created a Twake application.</li><li><em>Your application is installed and saved in your company.</em></li></ul><h2 id="steps" tabindex="-1">Steps: <a href="#steps" id="steps"></a> <a class="header-anchor" href="#steps" aria-hidden="true">#</a></h2><h3 id="_1-send-message-as-a-new-thread" tabindex="-1">1. Send message as a new Thread <a class="header-anchor" href="#_1-send-message-as-a-new-thread" aria-hidden="true">#</a></h3><ul><li><p>Find the app&#39;s token according to <a href="./authenticate-postman.html#1.-log-your-application">1. Log your Application</a></p></li><li><p>Find the identifiers to target a channel:</p><ul><li>Company&#39;s <em>id: $COMPANY_ID</em></li><li>Workspace&#39;s _id: $WOKSPACE__ID</li><li>Channel&#39;s <em>id: $CHANNEL_ID</em></li></ul></li><li><p><em>Set the message you want to send:</em></p><ul><li><p><em>Minimal:</em></p><p><em>$MESSAGE = { &quot;text&quot;: &quot;Hello world !&quot; }</em></p></li><li><p><em>To take full advantage of the messages capability in Twake see the</em> <a href="./../../internal-documentation/backend-services/messages/database-model.html"><em>MessageObject</em></a>__</p></li></ul></li><li><p>Send POST request with : </p><ul><li>Url: <a href="https://web.twake.app/api/messages/v1/companies/$COMPANY%5C_ID/threads" target="_blank" rel="noreferrer">https://web.twake.app/api/messages/v1/companies/$COMPANY\\_ID/threads</a></li><li>Headers: <code>{ &quot;Content-Type&quot;: &quot;application/json&quot;,</code> Authorization: &quot;<code>Bearer &quot; + $APP_TOKEN }</code></li><li>Body: <code>{ resource: { participants: [ { type: &quot;channel&quot;, id: $CHANNEL_ID, company_id: $COMPANY_ID, workspace_id: $WORKSPACE_ID, }, ], }, options: { $MESSAGE }, }</code></li></ul></li><li><p>This POST request will return a <a href="./../../internal-documentation/backend-services/messages/database-model.html">ThreadObject</a></p></li></ul><h3 id="_2-send-message-as-a-thread-answer" tabindex="-1">2. Send message as a Thread answer <a class="header-anchor" href="#_2-send-message-as-a-thread-answer" aria-hidden="true">#</a></h3><ul><li><p>Find the app&#39;s token according to <a href="./authenticate-postman.html#1.-log-your-application">1. Log your Application</a></p></li><li><p>Find the identifiers to target a channel:</p><ul><li>Company&#39;s <em>id: $COMPANY_ID</em></li><li>Workspace&#39;s _id: $WOKSPACE__ID</li><li>Channel&#39;s <em>id: $CHANNEL_ID</em></li><li><em>Thread&#39;s id: $THREAD_Id</em></li></ul></li><li><p><em>Set the message you want to send:</em></p><ul><li><p><em>Minimal:</em></p><p><em>$MESSAGE = { &quot;text&quot;: &quot;Hello world !&quot; }</em></p></li><li><p><em>To take full advantage of the messages capability in Twake see the</em> <a href="./../../internal-documentation/backend-services/messages/database-model.html"><em>MessageObject</em></a>__</p></li></ul></li><li><p>Send POST request with : </p><ul><li>Url: <a href="https://web.twake.app/api/messages/v1/companies/$COMPANY_ID/threads/$THREAD%5C__ID" target="_blank" rel="noreferrer">https://web.twake.app/api/messages/v1/companies/$COMPANY_ID/threads/$THREAD\\__ID</a></li><li>Headers: <code>{ &quot;Content-Type&quot;: &quot;application/json&quot;,</code> Authorization: &quot;<code>Bearer &quot; + $APP_TOKEN }</code></li><li>Body: <code>{ resource: { $MESSAGE } }</code></li></ul></li><li><p>This POST request will return a <a href="./../../internal-documentation/backend-services/messages/database-model.html">MessageObject</a></p></li></ul><h3 id="_3-applications-can-send-customized-messages" tabindex="-1">3. Applications can send customized messages <a class="header-anchor" href="#_3-applications-can-send-customized-messages" aria-hidden="true">#</a></h3><p>The <a href="./../../internal-documentation/backend-services/messages/database-model.html">MessageObject</a> object have a property called &quot;block&quot; that allow your application to send messages which contains more than a simple string. For example in an application message you can display an iFrame, buttons, menu selector, etc... Combining all this options you can create everything you want up to the limit of your imagination. To understand how to create powerful message using the block property see <a href="./../blocks.html">blocks</a>.</p>',13),o=[n];function l(r,d,p,c,h,m){return s(),a("div",null,o)}const _=e(i,[["render",l]]);export{g as __pageData,_ as default};
