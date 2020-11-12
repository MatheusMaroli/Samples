
export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON', // definição padrao para action result, o valor deve ser UNICO para aplicação
        module, 
        lesson
    }
}