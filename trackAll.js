//Automatic Event Tracking by AK
//        http://aktunes.com
//
//Step 1: include mixpanel JS lib
//Step 2: load this file AFTER mixpanel lib on every page
//Step 3: insert id management tag @ (bottom of this script)

$(document).ready(function() {
    mpTrackViews()
    mpTrackClicks()
    mpTrackLinkClicks()
    mpTrackButtons()
    mpTrackForms()
    // mpEmbedPlay()
});

function mpTrackViews() {
    mixpanel.track("Page View", {
        "relative Path": window.location.pathname,
        "auto-tracked": true
    })
}

function mpTrackClicks() {
    $(document).on("click", function(click) {
        if (($(click.target).is('a')) || ($(click.target).is('button'))) {
            //do nothing
        } else {
            mixpanel.track("Page Click", {
                "auto-tracked": true,
                "click id": click.target.id,
                "clicked on": click.target.textContent,
                "parent element": click.target.parentElement.id
            });
        }
    });
}

function mpTrackLinkClicks() {
    $(document).on("click", ("a"), function(click) {
        mixpanel.track("Link Click", {
            "auto-tracked": true,
            "target URL": click.target.href,
            "link text": click.target.innerText,
            "link id": click.target.id
        });
    })
}

function mpTrackButtons() {
    $(document).on("click", (":button"), function(click) {
        mixpanel.track("Button Click", {
            "auto-tracked": true,
            "button action": click.target.formAction,
            "button text": click.target.innerText,
            "button id": click.target.id,
            "button parent": click.target.parentElement,
            "button form": click.target.form
        });
    })
}

// unreliable as per: http://stackoverflow.com/questions/8343991/jquery-cant-bind-event-to-ajax-loaded-element-using-on
// function mpEmbedPlay() {
//     $(document).delegate("iframe", "click",  function(click) {
//         mixpanel.track("Embed Content", {
//             "auto-tracked": true,
//             "content location": click.data[0].src
//         });
//     });
// }

function mpTrackForms() {
        $('input').on("focusout", function(e) {
        	if (this.type !== 'password') {

                mixpanel.track("User Input", {
	                "auto-tracked": true,
	                "input ID": this.id,
	                "parent element": this.parentElement,
	                "user input": this.value,
	                "form": this.form


            	});
            };
        });
    }

//Nearly Automatic ID Management
//When a user signs up OR logs in call mpLogIn() on every page
//Note this WILL NOT distinguish between users on the same device; aliasing is required for this

function mpLogIn() {
    mixpanel.identify(mixpanel.cookie.props.distinct_id)
    mixpanel.people.set({"last page":window.location.href});
    mixpanel.people.set_once({"account created":Date.now()});
}