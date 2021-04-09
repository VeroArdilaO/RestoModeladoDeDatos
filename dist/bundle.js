/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/reto1.ts":
/*!**********************!*\
  !*** ./src/reto1.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tareas": () => (/* binding */ Tareas),
/* harmony export */   "statusTarea": () => (/* binding */ statusTarea)
/* harmony export */ });
//RETO 1 
/*Para un sistema de gestión de tareas, deseamos registrar todas las tareas, cada tarea tiene asociada la siguiente información: nombre, fecha de inicio, descripción y estatus, el estatus debe ser uno de los siguientes: pendiente, en proceso, terminada, cancelada. Además se requiere una lista con todas las tareas pendientes, las tareas terminadas y las canceladas*/
var Tareas = /** @class */ (function () {
    //Esto es como un inicializador o un puente
    function Tareas(nombre, fechaInicio, description, status, tareasPendientes, tareasTerminadas, tareasCanceladas) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.descripcion = description;
        this.status = status;
        this.tareasPendientes = tareasPendientes;
        this.tareasTerminadas = tareasTerminadas;
        this.tareasCanceladas = tareasCanceladas;
    }
    return Tareas;
}());

//Esto es un string enum permite crear una variable, que define todos los posibles valores fijos que pueda contener.
var statusTarea;
(function (statusTarea) {
    statusTarea["pendiente"] = "Pendiente";
    statusTarea["proceso"] = "En proceso";
    statusTarea["terminada"] = "Terminada";
    statusTarea["cancelada"] = "Cancelada";
})(statusTarea || (statusTarea = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reto1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reto1 */ "./src/reto1.ts");

//Esto es la asignacion de la clase a una variable
var miTarea = new _reto1__WEBPACK_IMPORTED_MODULE_0__.Tareas('Laura', new Date(2021, 4, 2), 'esta es una descripcion', _reto1__WEBPACK_IMPORTED_MODULE_0__.statusTarea.pendiente, ['Fisica', 'Quimica', 'Biologia'], ['Español', 'Algebra', 'Inglés'], ['Informática', 'Sociales']);
console.log(miTarea);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXRvcy10YXNrNS8uL3NyYy9yZXRvMS50cyIsIndlYnBhY2s6Ly9yZXRvcy10YXNrNS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXRvcy10YXNrNS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmV0b3MtdGFzazUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXRvcy10YXNrNS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JldG9zLXRhc2s1Ly4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUztBQUNULCtXQUErVztBQUUvVztJQVVJLDJDQUEyQztJQUMzQyxnQkFBWSxNQUFhLEVBQUUsV0FBaUIsRUFBRSxXQUFrQixFQUFFLE1BQWEsRUFBRSxnQkFBeUIsRUFDdEcsZ0JBQXlCLEVBQUUsZ0JBQXlCO1FBRXBELElBQUksQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7QUFDRCxvSEFBb0g7QUFDcEgsSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ25CLHNDQUF1QjtJQUN2QixxQ0FBd0I7SUFDeEIsc0NBQXVCO0lBQ3ZCLHNDQUF1QjtBQUMzQixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7Ozs7Ozs7VUNoQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNMMkM7QUFDM0Msa0RBQWtEO0FBQ2xELElBQUksT0FBTyxHQUFHLElBQUksMENBQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUUsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSx5QkFBeUIsRUFBRSx5REFBcUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDM00sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1JFVE8gMSBcclxuLypQYXJhIHVuIHNpc3RlbWEgZGUgZ2VzdGnDs24gZGUgdGFyZWFzLCBkZXNlYW1vcyByZWdpc3RyYXIgdG9kYXMgbGFzIHRhcmVhcywgY2FkYSB0YXJlYSB0aWVuZSBhc29jaWFkYSBsYSBzaWd1aWVudGUgaW5mb3JtYWNpw7NuOiBub21icmUsIGZlY2hhIGRlIGluaWNpbywgZGVzY3JpcGNpw7NuIHkgZXN0YXR1cywgZWwgZXN0YXR1cyBkZWJlIHNlciB1bm8gZGUgbG9zIHNpZ3VpZW50ZXM6IHBlbmRpZW50ZSwgZW4gcHJvY2VzbywgdGVybWluYWRhLCBjYW5jZWxhZGEuIEFkZW3DoXMgc2UgcmVxdWllcmUgdW5hIGxpc3RhIGNvbiB0b2RhcyBsYXMgdGFyZWFzIHBlbmRpZW50ZXMsIGxhcyB0YXJlYXMgdGVybWluYWRhcyB5IGxhcyBjYW5jZWxhZGFzKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXJlYXN7XHJcbiAgICAvL0VzdG8gZXMgdW5hIHZhcmlhYmxlIHBlcm8gZW4gY2xhc2VzIHNlIGNvbm9jZSBjb21vIGF0cmlidXRvXHJcbiAgICBwdWJsaWMgbm9tYnJlIDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmVjaGFJbmljaW8gOiBEYXRlO1xyXG4gICAgcHVibGljIGRlc2NyaXBjaW9uIDogc3RyaW5nO1xyXG4gICAgcHVibGljIHN0YXR1cyA6IHN0cmluZztcclxuICAgIHB1YmxpYyB0YXJlYXNQZW5kaWVudGVzIDogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgdGFyZWFzVGVybWluYWRhcyA6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHRhcmVhc0NhbmNlbGFkYXMgOiBzdHJpbmdbXTtcclxuICAgIFxyXG4gICAgLy9Fc3RvIGVzIGNvbW8gdW4gaW5pY2lhbGl6YWRvciBvIHVuIHB1ZW50ZVxyXG4gICAgY29uc3RydWN0b3Iobm9tYnJlOnN0cmluZywgZmVjaGFJbmljaW86IERhdGUsIGRlc2NyaXB0aW9uOnN0cmluZywgc3RhdHVzOnN0cmluZywgdGFyZWFzUGVuZGllbnRlczpzdHJpbmdbXSwgXHJcbiAgICAgICAgdGFyZWFzVGVybWluYWRhczpzdHJpbmdbXSwgdGFyZWFzQ2FuY2VsYWRhczpzdHJpbmdbXSl7XHJcblxyXG4gICAgICAgIHRoaXMubm9tYnJlID0gIG5vbWJyZTtcclxuICAgICAgICB0aGlzLmZlY2hhSW5pY2lvID0gZmVjaGFJbmljaW87XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwY2lvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMudGFyZWFzUGVuZGllbnRlcyA9IHRhcmVhc1BlbmRpZW50ZXM7XHJcbiAgICAgICAgdGhpcy50YXJlYXNUZXJtaW5hZGFzID0gdGFyZWFzVGVybWluYWRhcztcclxuICAgICAgICB0aGlzLnRhcmVhc0NhbmNlbGFkYXMgPSB0YXJlYXNDYW5jZWxhZGFzO1xyXG4gICAgfVxyXG59XHJcbi8vRXN0byBlcyB1biBzdHJpbmcgZW51bSBwZXJtaXRlIGNyZWFyIHVuYSB2YXJpYWJsZSwgcXVlIGRlZmluZSB0b2RvcyBsb3MgcG9zaWJsZXMgdmFsb3JlcyBmaWpvcyBxdWUgcHVlZGEgY29udGVuZXIuXHJcbmV4cG9ydCBlbnVtIHN0YXR1c1RhcmVhIHtcclxuICAgIHBlbmRpZW50ZSA9ICdQZW5kaWVudGUnLFxyXG4gICAgcHJvY2VzbyA9ICAgJ0VuIHByb2Nlc28nLFxyXG4gICAgdGVybWluYWRhID0gJ1Rlcm1pbmFkYScsXHJcbiAgICBjYW5jZWxhZGEgPSAnQ2FuY2VsYWRhJ1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0IHtUYXJlYXMsIHN0YXR1c1RhcmVhfSBmcm9tIFwiLi9yZXRvMVwiXHJcbi8vRXN0byBlcyBsYSBhc2lnbmFjaW9uIGRlIGxhIGNsYXNlIGEgdW5hIHZhcmlhYmxlXHJcbmxldCBtaVRhcmVhID0gbmV3IFRhcmVhcygnTGF1cmEnLCBuZXcgRGF0ZSAoMjAyMSw0LDIpLCAnZXN0YSBlcyB1bmEgZGVzY3JpcGNpb24nLCBzdGF0dXNUYXJlYS5wZW5kaWVudGUsIFsnRmlzaWNhJywgJ1F1aW1pY2EnLCAnQmlvbG9naWEnXSwgWydFc3Bhw7FvbCcsICdBbGdlYnJhJywgJ0luZ2zDqXMnXSwgWydJbmZvcm3DoXRpY2EnLCAnU29jaWFsZXMnXSk7XHJcbmNvbnNvbGUubG9nKG1pVGFyZWEpO1xyXG5cclxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=