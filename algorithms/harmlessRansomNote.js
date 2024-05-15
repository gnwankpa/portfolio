function hamrlessRansonNote (noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => { // o(n)
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true; //O(m)
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;    

    });
    console.log(noteIsPossible);
    //O(n) + O(m)
    // O(n + m)
}


hamrlessRansonNote('this is a secret note for you from a secret admirer', ' is a where are you working on ? this secret note for you from a secret admirer test lol for you and the beatt');