Search All The Things
===

Use webpack and react to create a tested app that allows a user to search an API.

## Choose an API

_Possible_ API choices:
* http://www.omdbapi.com/
* https://developers.google.com/books/
* https://pokeapi.co/api/v2/
* https://swapi.co/
* https://newsapi.org/ (the one used in class)

Part of this assignment is to research the API you are going to use. Don't assume these
all are going to work!. Requirements:

* **supports CORS** (search from AJAX call)
* searchable (ideally on more than one thing)
* paged

## App Requirements

1. Prompt the user on initial load to enter criteria
    - aka not searched is different than nothing found
1. Allow the user to search on one or more criteria
    - **Bonus!** for criteria condition that comes from the API!
1. Call the API and display a loading indicator
1. Present the search results and clear the loading indicator
1. Account for "page size". Does not have to be user settable, but it can!
1. Display
    - Search Term(s) used 
    - Total count of results
    - "page of pages"
1. Show Paging Controls
    - Previous and Next
    - Disable when not possible
    - **Bonus!** Results per page selectable
    - **Bonus!** Render specific page numbers around current range
    
## Process Requirements

1. Sketch out UI and decompose into components
1. Transfer to tree diagram and map out state, props and event

## Testing Requirements

Test components:	
- Trigger events	
- Use snapshot testing	
    - Include each state if component has multiple representations	

## Development Requirements

1. Standard project setup (config, package.json, etc.)
1. Include `.travis.yml`
1. Organize 
    - components into separate files
    - css by component
1. Components
    - Lift state
    - Data down, events up
1. Keep code clean

## Rubric

* Follow component architecture guidelines **2pts**
* Functionality and Usability to Requirements **4pts**
* Idiomatic React **2pts**
* Clean code and project organization **2pts**
