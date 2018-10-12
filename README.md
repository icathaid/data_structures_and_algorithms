-=-=-=-=-=-=-=-  TO DO -=-=-=-=-=-=-=-

put whiteboard images inline

travis badge


# data_structures_and_algorithms

##  Code Challenge 03 - Binary Search Array


Challenge Details
- Feature Tasks:

[]  write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key.  Without utilizing any of the built-in methods of javaScript, return the index of the array's element that is equal to the search key, or -1 if the element does not exist.

- Resources:

[Wikipedia BST algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)

    it's listed in the instructions so I used it.  My lab partner and I tried without, and came a lot closer than I realized to getting the right algorithm, but I wasn't storing the L and R markers anywhere, so it became a nightmare of nexted array indexes, and I wasn't sure how to handle those as it iterated through the loop.  Since we were pretty stuck on it, I took another look at the instructions, and found this.  I still didn't understand quite what it was doing, so I 'pre-whiteboarded' it by writing down the pseudocoded algorithm and deconstructing it to help me understand what it was doing.  I put together a truth table to keep track of what values were changing with each line, and pretty soon it was clear how to proceed.  I included a picture of the pre-whiteboard and the whiteboard I built from there.

* Big O * 
    I remember reading that the binary search tree algorithm has a big O of log(n), and I think it was mentioned in lecture, but I legitimately have no idea how to calculate that.


Testing

- I modularized the function so I could test it with jest; entering 'npm run test' from the console log will run all of them.
    it says I have 100% of lines covered, but that line 14 is uncovered.  Not sure what to do with that.  
