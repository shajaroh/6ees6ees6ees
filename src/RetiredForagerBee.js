class RetiredForagerBee extends Bee {
  constructor() {
    super(ForagerBee)
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey'; 
    this.treasureChest = [];
  }

  gamble (treasure) {
    this.treasureChest.push(treasure);
  }  

  forage () {
    return 'I am too old, let me play cards instead';
  }

};
