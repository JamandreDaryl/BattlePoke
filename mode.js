let playerHP = 100;
let opponentHP = 100;
let playerMove = 0;

function quickAttack() {
  if (playerMove === 0 && playerHP > 0) {
    let miss = Math.floor(Math.random() * 10) + 1;
    if (miss === 1) {
      document.getElementById('message').innerHTML = "Eevee's attack missed!";
    } else {
      document.getElementById('message').innerHTML = "Eevee used Quick Attack!";
      let damage = 20;
      opponentHP -= damage;
      if (opponentHP < 0) opponentHP = 0;
      document.getElementById('opponentHP').innerHTML = opponentHP;
      if (opponentHP === 0) {
        document.getElementById('message').innerHTML = "Pikachu fainted!";
      }
    }
    playerMove = 1;
    setTimeout(opponentMove, 1000);
  }
}

function thunderShock() {
  if (playerMove === 0 && playerHP > 0) {
    let miss = Math.floor(Math.random() * 10) + 1;
    if (miss === 1) {
      document.getElementById('message').innerHTML = "Eevee's attack missed!";
    } else {
      document.getElementById('message').innerHTML = "Eevee used Thunder Shock!";
      let damage = 30;
      opponentHP -= damage;
      if (opponentHP < 0) opponentHP = 0;
      document.getElementById('opponentHP').innerHTML = opponentHP;
      if (opponentHP === 0) {
        document.getElementById('message').innerHTML = "Pikachu fainted!";
      }
    }
    playerMove = 1;
    setTimeout(opponentMove, 1000);
  }
}

function swift() {
  if (playerMove === 0 && playerHP > 0) {
    let miss = Math.floor(Math.random() * 10) + 1;
    if (miss === 1) {
      document.getElementById('message').innerHTML = "Eevee's attack missed!";
    } else {
      document.getElementById('message').innerHTML = "Eevee used Swift!";
      let damage = 15;
      opponentHP -= damage;
      if (opponentHP < 0) opponentHP = 0;
      document.getElementById('opponentHP').innerHTML = opponentHP;
      if (opponentHP === 0) {
        document.getElementById('message').innerHTML = "Pikachu fainted!";
      }
    }
    playerMove = 1;
    setTimeout(opponentMove, 1000);
  }
}

function tackle() {
  if (playerMove === 0 && playerHP > 0) {
    let miss = Math.floor(Math.random() * 10) + 1;
    if (miss === 1) {
      document.getElementById('message').innerHTML = "Eevee's attack missed!";
    } else {
      document.getElementById('message').innerHTML = "Eevee used Tackle!";
      let damage = 10;
      opponentHP -= damage;
      if (opponentHP < 0) opponentHP = 0;
      document.getElementById('opponentHP').innerHTML = opponentHP;
      if (opponentHP === 0) {
        document.getElementById('message').innerHTML = "Pikachu fainted!";
      }
    }
    playerMove = 1;
    setTimeout(opponentMove, 1000);
  }
}

function opponentMove() {
  if (playerMove === 1 && opponentHP > 0) {
    let move = Math.floor(Math.random() * 4) + 1;
    switch (move) {
      case 1:
        Thunderbolt();
        break;
      case 2:
        Surf();
        break;
      case 3:
        Encore();
        break;
      case 4:
        Tackle();
        break;
      default:
        break;
    }
    playerMove = 0;
  }
}

function Thunderbolt() {
  let miss = Math.floor(Math.random() * 10) + 1;
  if (miss === 1) {
    document.getElementById('message').innerHTML = "Pikachu's attack missed!";
  } else {
    document.getElementById('message').innerHTML = "Pikachu used Thunderbolt!";
    let damage = 25;
    playerHP -= damage;
    if (playerHP < 0) playerHP = 0;
    document.getElementById('playerHP').innerHTML = playerHP;
    if (playerHP === 0) {
      document.getElementById('message').innerHTML = "Eevee fainted!";
    }
  }
}

function Surf() {
  let miss = Math.floor(Math.random() * 10) + 1;
  if (miss === 1) {
    document.getElementById('message').innerHTML = "Pikachu's attack missed!";
  } else {
    document.getElementById('message').innerHTML = "Pikachu used Surf!";
    let damage = 15;
    playerHP -= damage;
    if (playerHP < 0) playerHP = 0;
    document.getElementById('playerHP').innerHTML = playerHP;
    if (playerHP === 0) {
      document.getElementById('message').innerHTML = "Eevee fainted!";
    }
  }
}

function Encore() {
  let miss = Math.floor(Math.random() * 10) + 1;
  if (miss === 1) {
    document.getElementById('message').innerHTML = "Pikachu's attack missed!";
  } else {
    document.getElementById('message').innerHTML = "Pikachu used Encore!";
    let damage = 20;
    playerHP -= damage;
    if (playerHP < 0) playerHP = 0;
    document.getElementById('playerHP').innerHTML = playerHP;
    if (playerHP === 0) {
      document.getElementById('message').innerHTML = "Eevee fainted!";
    }
  }
}

function Tackle() {
  let miss = Math.floor(Math.random() * 10) + 1;
  if (miss === 1) {
    document.getElementById('message').innerHTML = "Pikachu's attack missed!";
  } else {
    document.getElementById('message').innerHTML = "Pikachu used Tackle!";
    let damage = 10;
    playerHP -= damage;
    if (playerHP < 0) playerHP = 0;
    document.getElementById('playerHP').innerHTML = playerHP;
    if (playerHP === 0) {
      document.getElementById('message').innerHTML = "Eevee fainted!";
    }
  }
}
