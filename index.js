const msgArray = ['La pasión es el inicio del éxito', 'Uno de los secretos del éxito empresario consiste no en hacer uno mismo el trabajo, sino en reconocer al hombre apropiado para hacerlo', 'El éxito no se da de la noche a la mañana. Es cuando cada día eres un poco mejor que el día anterior. Todo suma', 'Debes hacer cosas que realmente sean importantes, pero también debes divertirte porque si no, no tendrás éxito', 'No tienes que ser un genio, un visionario o graduado para tener éxito. Todo lo que necesitas es perspectiva y un sueño', 'No seas un sabelotodo, en su lugar sé un aprendelotodo']

// first option
const pushMsg = () => {
    let randomMsg = Math.floor(Math.random() * 6);
    switch (randomMsg) {
        case 0:
            return `This is your lucky message: ${msgArray[0]}`;
            break;
        case 1:
            return `This is your lucky message: ${msgArray[1]}`;
            break;
        case 2:
            return `This is your lucky message: ${msgArray[2]}`;
            break;
        case 3:
            return `This is your lucky message: ${msgArray[3]}`;
            break;
        case 4:
            return `This is your lucky message: ${msgArray[4]}`;
            break;
        case 5:
            return `This is your lucky message: ${msgArray[5]}`;
            break;
        case 6:
            return `This is your lucky message: ${msgArray[6]}`;
            break;
        default:
            break;
    }
}

// second option
const pushMsgTwo = arr => {
    let newArr = arr;
    let randomMsg = Math.floor(Math.random() * 6);
    return `This is the second function: ${newArr[randomMsg]}`;
}

console.log(pushMsg());
console.log(pushMsgTwo(msgArray));
