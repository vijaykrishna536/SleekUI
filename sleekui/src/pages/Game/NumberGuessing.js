export default {
    name:'NumberGuessing',
    data () {
        return {
            GuessedNumber:'',
            Message:'',
            CorrectNumber:0
        }
    },
    methods : {
        Clean () {
            this.GuessedNumber='',
            this.Message=''
        },
        Shuffle () {
            this.Clean()
            this.GenerateNumber()
        },
        GenerateNumber () {
            this.CorrectNumber = Math.floor(Math.random()*10)
        },
        Check () {
            if(this.CorrectNumber==this.GuessedNumber) {
                this.Message="Correct Number \n Seems like you're Genius!!"
            } else if (parseInt(this.GuessedNumber)>10 || parseInt(this.GuessedNumber)<0) {
                this.Message="You're Way out of operating Region Buddy!!!"
            } else {
                this.Message="It's Incorrect \n You Dumb"
            }
        }
    },
    mounted () {
        this.GenerateNumber()    
    }
}