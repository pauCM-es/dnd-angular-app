# COMMENTS ABOUT THE WAY OF THINGS

## Estructure

### Navbars

There is the top-level toolbar and a side-navbar that toggles with the button on the top one. We need cross-component interaction to send the click to de side-nav.</br>
I'm gonna used a service and an eventEmiter to do that. I could do it with a Subject(rxjs) but just need 1 observer for the toggle.
