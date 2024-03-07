// class Optics {
//     static f(initialfunction: () => void) {
//         initialfunction();
//     }

//     static global(initializer: () => void) {
//         return initializer;
//     }
// }

// Optics.f(Optics.global(() => {
//     console.log("hello");
// }));

// /*
// want to use:
// Optics.f(Optics.global(() => {
//     console.log("hello");
// }));

// */

