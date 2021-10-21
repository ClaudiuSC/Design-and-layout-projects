BBQ responsive landing page with with a register form.

It features gradients on text, using text clip, on a button and on an ::after pseudo element which was used to simulate a border(i later learned that there is a border-image property which can be used to acomplish this).

Another special feature for this page is a background image which i applied on an ::after pseudo element in order to apply opacity to it, this way not affecting the content of the section. I used a background color with rgba to make blend the image with the color(could have used background blend mode but this worked as well).

It also has hover and focus effects on the submit button.

**V2**
Added the following:
* hover effects on the H1(scaling) and on a text element with a top border(letter spacing modifier) using a cubic bezier effect;
* added interactivity with the form: it changes the HTML in the form section after you hit submit with the correct data entered.
