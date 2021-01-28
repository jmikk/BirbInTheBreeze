// Breeze Version 3.0.0
(function() {
	var shifted = false;
	var controlled = false;
	var alternated = false;
	$(document).keydown(function(f) {
		shifted = f.shiftKey;
        controlled = f.ctrlKey;
		alternated = f.altKey;
		// Stops the spacebar from scrolling when jumping to the reports page
		if (f.keyCode == 32 && f.target == document.body) {
			f.preventDefault();
			f.stopPropagation();
		}
	});
	// This is the main keymapping function of the script
	$(document).keyup(function(e) {
		// Breeze will not activate while you are using the Shift, Ctrl, ot Alt keys
        if (shifted || controlled || alternated){
			return;
        }
		else {
			if ($("input,textarea").is(":focus")){
			// Breeze will not activate if you are typing in a text field
				return;
			}	
			// Did My Nation Update? (U)
			else if (e.keyCode == 85){
				window.location.href = "https://www.nationstates.net/page=ajax2/a=reports/view=self/filter=change";
			}
			// Region (R)
			else if (e.keyCode == 82){
				if (window.location.href.indexOf("net/region=") > -1 || window.location.href.indexOf("none/region=") > -1) {
					window.location.reload();
				}
				if (window.location.href.indexOf("template-overall=none/page=change_region") > -1) {
					var region_url = $('a[href^="/region"]').first().text().toLowerCase().split(' ').join('_');
					window.location.replace("https://www.nationstates.net/region=' "+region_url+"'");
				}
				if (window.location.href.indexOf("none/page=reports") > -1 || window.location.href.indexOf("page=ajax2/a=reports") > -1) {
					$('li a:nth-of-type(3)')[0].click();
					$('li a:nth-of-type(3)').eq(0).css("background-color", "yellow");
				}
				else {
					if ($('#paneltitle').length > 0){
						// using Rift
						$('#panel').children('.panelcontent').children('.menu').children('li').children('a')[0].click();
					}
					else{
						// Default theme
						$('#panel').children('ul').children('li').children('a')[1].click();
					}	 
				}
			}
			// WA Delegate (W)
			else if(e.keyCode == 87){
				if (window.location.href.indexOf("template-overall=none/region=") > -1) {
					if ($("p:contains('None.')").length) {
						alert("This region doesn't have a WA delegate.");
					}
					else {
						$('a[href^="nation"]')[0].click();
					}
				}
				else {
					if ($("p:contains('None.')").length) {
						alert("This region doesn't have a WA delegate.");
					}	
					else {	
					$('#content').children('p:nth-child(2)').children('a.nlink:first')[0].click();
					}
				}
			}
			// Endorse/Cross Endorse (E or C)
			else if (e.keyCode == 69 || e.keyCode == 67){
				if (window.location.href.indexOf("page=reports") > -1 || window.location.href.indexOf("page=ajax2/a=reports") > -1){
					$('li a:nth-of-type(1)')[0].click(); 
					$("li a:nth-of-type(1)").eq(0).css("background-color", "yellow");
				} 
				else {
					if ($('input[name=action]').val() == "endorse") $('button.endorse').first().trigger('click');  
				}
			}
			// Add nation to dossier [D or V]
			// If on any kind of reports feed, select top happening nation and then add to dossier [D, D or V, V]
			else if (e.keyCode == 86 || e.keyCode == 68){
				if (window.location.href.indexOf("page=reports") > -1 || window.location.href.indexOf("page=ajax2/a=reports") > -1){
					$('li a:nth-of-type(1)')[0].click(); 
					$("li a:nth-of-type(1)").eq(0).css("background-color", "yellow");
				} 
				else {
				$('.button[name=action][value=add]').first().trigger('click');		
				}
			}
			// Check if a GCR is updating [G] (Same as the plain Activity page, but faster)
			else if (e.keyCode == 71){
				window.location.href = "https://www.nationstates.net/page=ajax2/a=reports/view=world/filter=change";
			}			
			// Ajax2 feed for region happenings [H]
			else if (e.keyCode == 72){	
				if (window.location.href.indexOf("region=") > -1) {
					var region_url = $('a[href^="/region"]').first().text().toLowerCase().split(' ').join('_');
					window.location.href = "https://www.nationstates.net/page=ajax2/a=reports/view=region." +region_url+"/filter=move+member+endo";
					}
			}
			// Prep Switchers (P, P, P, P)
			else if (e.keyCode == 80){
				e.preventDefault();
				if (window.location.href.indexOf("page=un") <= -1 && window.location.href.indexOf("region=birb") <- -1) {
					window.location.href = "https://www.nationstates.net/template-overall=none/page=un";
				}
				if (window.location.href.indexOf("page=un") > -1) {
					$('.button[name=submit]').first().trigger('click');
				}
				if (window.location.href.indexOf("page=UN_status") > -1) {
					window.location.href = "https://www.nationstates.net/template-overall=none/region=birb";
					
				}
				if (window.location.href.indexOf("region=birb") > -1) {
					$('.button[name=move_region], input[name=move_region]').first().trigger('click');
				}
			}
			// Resign/Apply to WA (', ', ENTER, ', ')
			else if (e.keyCode == 222){
				e.preventDefault();
				if (window.location.href.indexOf("none/page=un") > -1) {
					$('form > p > button').first().trigger('click');
				}
				else {
					window.location.href = "https://www.nationstates.net/template-overall=none/page=un";
				}
			}
			// Clear Dossier (X, X, ENTER)
			else if (e.keyCode == 88){
				var current_url = $(location).attr('href');
				if (current_url == "https://www.nationstates.net/page=dossier"){
					$('.button[name=clear_dossier]').first().trigger('click');
				}
				else {
					window.location.href = "https://www.nationstates.net/page=dossier";
				}
			}
			// Toggle site template on or off (T)
			else if (e.keyCode == 84){
				if (window.location.href.indexOf("none/region") > -1) {
					var region_url = $('a[href^="/region"]').first().text().toLowerCase().split(' ').join('_');
					console.log(region_url);
					window.location.replace("https://www.nationstates.net/region="+region_url+" ");
				}
				if (window.location.href.indexOf("none/nation") > -1) {
					var nation_url = $('.quietlink').first().text().toLowerCase().split(' ').join('_'); 
					window.location.replace("https://www.nationstates.net/nation="+nation_url+" ");
				}
				if (window.location.href.indexOf("net/region") > -1) {
					var region_url = $('a[href^="/region"]').first().text().toLowerCase().split(' ').join('_');
					console.log(region_url);
					window.location.replace("https://www.nationstates.net/template-overall=none/region="+region_url+" ");
				}
				if (window.location.href.indexOf("net/nation") > -1) {
					var nation_url = $('.quietlink:eq(1)').text().toLowerCase().split(' ').join('_'); 
					window.location.replace("https://www.nationstates.net/template-overall=none/nation="+nation_url+" ");
				}
				else {
					return;
				}	
			}
			// File GHR (?)
			else if (e.keyCode == 191){
				window.location.href = "https://www.nationstates.net/page=help";
			}
			// Zombie Control (Z)
			else if (e.keyCode == 90){
				window.location.href = "https://www.nationstates.net/page=zombie_control";
			}
			// Go Back (<)
			else if (e.keyCode == 188){
				window.history.back();
			}
			// Refresh (N)
			else if (e.keyCode == 78){
				window.location.reload();
			}
			// Reports Page No Template (Spacebar)
			else if (e.keyCode == 32 && e.target == document.body) {
				if (window.location.href.indexOf("none/page=reports") > -1) {
					window.location.href = "https://www.nationstates.net/page=ajax2/a=reports/view=world/filter=move+member+endo";
				}
				else {
					window.location.href = "https://www.nationstates.net/template-overall=none/page=reports";
				}
			}
			// Activity feed with chasing filters [A], Plain activity feed [A, A]
			else if (e.keyCode == 65){
				if (window.location.href.indexOf("page=activity/view=world") > -1 && window.location.href.indexOf("filter=move+member+endo") === 0 ) {
					window.location.href = "https://www.nationstates.net/page=activity/view=world/filter=move+member+endo";
				}
				else if (window.location.href.indexOf("page=activity/view=world/filter=move+member+endo") > -1) {
					window.location.href = "https://www.nationstates.net/page=activity/view=world";
				}
				else {
					window.location.href = "https://www.nationstates.net/page=activity/view=world/filter=move+member+endo";
				}
			}
			// Move Back to Birb (B, B)
			else if (e.keyCode == 66){
				var current_url = $(location).attr('href');
				if (current_url == "https://www.nationstates.net/region=birb"){
					$('.button[name=move_region], input[name=move_region]').first().trigger('click');
				}
				else {	  
					window.location.href = "https://www.nationstates.net/region=birb";
				}
			}
			// Move to selected region [M], Select a region and then move to it [M, M]
			// If on any kind of reports feed, select top happening region and then move to it [M, M] (Must be a 3-part happening)
			else if (e.keyCode == 77){
				if (window.location.href.indexOf("page=reports") > -1 || window.location.href.indexOf("page=ajax2/a=reports") > -1){
					$('li a:nth-of-type(3)')[0].click(); 
					$("li a:nth-of-type(3)").eq(0).css("background-color", "yellow");	
				}					
				else {
					$('.button[name=move_region], input[name=move_region]').first().trigger('click');
				} // End of Else Code 
			} //End of Move code
		} //End of Else keylist
	}); // End of Keyup Function(e)
})(); //End of Main function

$( document ).ready(function() {
	// Displays load time on the reports page
	if (window.location.href.indexOf("page=reports") > -1 ) {
		var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
		$( "h1:first" ).append(" - PAGE LOAD TIME: " +loadTime+ " ms").css( "color", "#006400" );
	}
	// Starts nation pages at the bottom when you load them, so you can endorse easier
	if (window.location.href.indexOf("nation=") > -1 && window.location.href.indexOf('template-overall=none') === -1 &&  window.location.href.indexOf('page=join_WA') === -1) {
		$('html, body').scrollTop( $(document).height() );
	}
	if (window.location.href.indexOf("page=ajax2") > -1 || window.location.href.indexOf("page=reports") > -1) {
	// Enables clicking on ajax2 reports links	
		$('.nlink').each(function() {
			$(this).attr("href", function(index, old) {
				return old.replace("nation", "/template-overall=none/nation");
			});
		});
	$('.rlink').each(function() {
		$(this).attr("href", function(index, old) {
			return old.replace("region", "/template-overall=none/region");
			});
		});
	} // End of page load time	
}); //End of page
// End of Script