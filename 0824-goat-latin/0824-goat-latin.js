/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const GoatLatin = function (str) {
        this.str = str
        this.vowel = ['a', 'e', 'i', 'o', 'u']
        
        this.byIsVowelTo = function () {
            if (this.vowel.includes(this.str[0].toLowerCase())) {
                this.str = this.str + 'ma';
            } else {
                this.str = this.str.substring(1) + str[0] + 'ma';
            }
        }
        this.repeatA = function (i) {
            this.str = this.str + 'a'.repeat(i);
        }    
        this.getStr = function () {
            return this.str;
        }
    }
    
    return sentence.split(' ').map((str, i) => {
        const goatLatin = new GoatLatin(str);
        goatLatin.byIsVowelTo();
        goatLatin.repeatA(i + 1);
        return goatLatin.getStr();
    }).join(' ');
    
};