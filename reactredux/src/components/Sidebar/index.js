import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as CourseActions from  '../../store/actions/course';



                // MODULES :  importado via redux com metodo connect
                // dispatch : injetado pelo redux  quando chamada essa função é desparado 
                //            a função de parametro com retorno para alteração do estado da app na store
const Sidebar = ({modules, toggleLesson}) => {
    return (
        <aside>
            {
                modules.map(module => (
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {
                                module.lessons.map(lesson => (
                                    <li key={lesson.id}>{lesson.title} 
                                        <button onClick={() => toggleLesson(module, lesson) }>Selecionar Aula</button>
                                    </li>
                                ))
                            }
                        </ul>  
                    </div>
                ))
            }
        </aside>
    )
}

const mapStateProps = (state) => ({modules : state.course.modules});
/*
mapeia as funções disponivel no arquivo CourseActions para passar via conecction 
pode ser substituido pelo metodo bindActionCreators do redux
const mapDispatchToProps = (dispatch) => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})*/

const mapDispatchToProps =(dispatch) => bindActionCreators(CourseActions, dispatch); //utiliza o bindAction do redux, mappeando todas as funções disponivel no objecto CoruseActions

 //realiza a conexão do componente com o redux, disponibilizado pelo provider   
export default connect(
    mapStateProps, 
    mapDispatchToProps)(Sidebar);