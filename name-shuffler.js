// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    str.split(" ").reverse().join(" ")
}

// Test.assertEquals(nameShuffler('john McClane'),'McClane john');