
//array of words that will be randomly chosen
var words= ["paris", "denver", "london", "dallas", "miami", "chicago", "seattle", "nashville", "boston"];
var wins= 0;
var losses = 0;

var game = {
    // empty array will be pushed the chosen word
    guessed: [],
    //remaining guesses
    left: 10,
    start: function() {
        this.complete = false;

        //here we bring a  random index number down choose a random word from the array above. * .length multiplies Math.random by 5 the number of words in the array
        this.word = words[Math.floor(Math.random() * words.length)];
        //displays right choice
        this.$right = document.getElementById('right');
        //displays wrong choice
        this.$wrong = document.getElementById('wrong');
        this.$remain = document.getElementById('remain');

        //here the randomly chosen word will create underscores for the individual letter of the randomly chosen word
        this.$right.innerHTML = '_'.repeat(this.word.length);
        },
        guess: function(letter) {
          if (this.left > 0 && this.complete != true) {
            if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
              this.right(letter);
            } else {
              this.wrong(letter);
            }
          }
        },

        // right guess for array with underscores
        right: function(letter) {
          for(var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
              var word = this.$right.innerHTML.split('');
              word[i] = letter;
              this.$right.innerHTML = word.join('');
            }
          }
          if (this.$right.innerHTML.indexOf('_') < 0) {
            alert("Well Done! Play again?");
            this.complete = true;
            $('#numberWins').text(wins);
            wins++;
       
          }
        },

        //letter is wrong not in the chosen word from array
        wrong: function(letter) {
          this.guessed.push(letter);
          this.$wrong.innerHTML += ' ' + letter;
          this.left--;
          this.$remain.innerHTML = this.left;
          if (this.left < 1) {
            alert('you lose! The word is '+ this.word);
            this.complete = true;
            $('#numberLosses').text(losses);
            losses++;
          }
        }
      };
      game.start();

      
      document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        game.guess(letter);
      };
      
//need to insert a reset function


