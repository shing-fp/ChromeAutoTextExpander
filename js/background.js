
// Listen for whether or not to show the pageAction icon
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log(request);
	console.log(sender);

	switch (request.request)
	{
		case "showPageAction":
			chrome.pageAction.show(sender.tab.id);
			break;

		default:
			console.log("Unknown request received:", request);
			break;
	}
});