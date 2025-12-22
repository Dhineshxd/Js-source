// DOM = Document object model
   It is web API given by browser to access or modify html elements in js .
document
1. window.document.

target :
1.getElementById() ---> single elements
2.getElementsByClassName() ---> html collection
3.getElementsTagName() ---> html collection
4.getElementsByName() ---> node list
5.querySelector() ---> single element
6.querySelectorAll() ---> node list

html collection -- is live
node list -- live and static --
             name-is , querySelectorAll is static
list - will take changes automatically
static - will not take changes automatically..

Create elements :
1. document.createElement()
2. variableName.innerHtml

How to text to elements
1. innerHtml ---> we can text , space , tags.
2. innerText ---> we can only text.
3. textContent ---> we can add text and space.

Adding elements is html :
1. .append() : more than one element as last child.
2. .appendChild() : only one elements as a last child .
3. .prepend() : more than element as a first child