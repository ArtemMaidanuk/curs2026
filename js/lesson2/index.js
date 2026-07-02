// let isSunny = confirm("Сьогодні сонячно?")
// let isWarm = confirm("Сьогодні тепло?")
//
// if (isSunny && isWarm) {
//     console.log("Можеш іти гуляти")
// } else {
//     console.log("Краще посидь у дома")
// }
//
// if (isWarm || isSunny) {
//     console.log("Можеш одягнути футболку")
// } else {
//     console.log("Краще посидь у дома")
// }


let dayOfWeek = prompt('Ведіть день тижня')

// switch (dayOfWeek) {
//     case 'понеділок' :
//         console.log("робочий");
//         break;
//
//     case 'вівторок' :
//         console.log("робочий");
//         break;
//
//     case 'середа' :
//         console.log("робочий");
//         break;
//
//     case 'четвер' :
//         console.log("робочий");
//         break;
//
//     case 'пятниця' :
//         console.log("робочий");
//         break;
//
//     case 'субота' :
//         console.log("вихідний");
//         break;
//
//     case 'неділя' :
//         console.log("вихідний");
//         break;
//
//     default:
//         console.log("Введено не вірні дані");
// }

switch (dayOfWeek) {
    case 'понеділок' :
    case 'вівторок' :
    case 'середа' :
    case 'четвер' :
    case 'пятниця' :
        console.log("робочий");
        break;
    case 'субота' :
    case 'неділя' :
        console.log("вихідний можеш відпочити");
        break;
    default:
        console.log("Введено не вірні дані");
}


