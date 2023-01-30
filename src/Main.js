import React, { Component } from 'react';

// organizar lista

import Footer from "./components/footer/footer";
import Form from './components/forms';
import Header from './components/Header/Header.js';
import List from './components/List/List';


import "./main.css";

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [null],
        tarefaFeita: [],
        isActive: true,
        checked: [],
        backupChecked: [],
    }

    componentDidMount() {

        const tarefas = JSON.parse(localStorage.getItem('tarefas'));
        let tarefaFeita = JSON.parse(localStorage.getItem('tarefaFeita'));
        let checked = JSON.parse(localStorage.getItem('checked'));
        const isActive = localStorage.getItem('isActive');
        
        if(!tarefas) return;
        if(!tarefaFeita) return;
        if(!isActive) return;
        if(!checked) return;

        this.setState({tarefas})
        this.setState({tarefaFeita})
        this.setState({isActive})
        this.setState({checked})
    }

    componentDidUpdate(prevState) {
        const {tarefas, isActive} = this.state;
        let {tarefaFeita, checked } = this.state;
        if (tarefas === prevState.tarefas ||
        tarefaFeita === prevState.tarefaFeita ||
        isActive === prevState.isActive || checked === prevState.checked) return;
        
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        localStorage.setItem("tarefaFeita", JSON.stringify(tarefaFeita))
        localStorage.setItem("isActive", isActive)
        localStorage.setItem("checked", JSON.stringify(checked))

    }

    
    singleActive = () => {
        const mainInput = document.getElementById('mainInput');
        mainInput.classList.toggle('strikeWord');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { tarefas, tarefaFeita } = this.state;
        let { novaTarefa, checked } = this.state;

        const novasTarefas = [...tarefas];

        
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return;

        checked.push(e.target[0].checked);

        if(e.target[0].checked) {
            tarefaFeita.push(novaTarefa)
        }
        this.setState({
            tarefas: [ ...novasTarefas, novaTarefa],
            tarefaFeita: [ ...tarefaFeita ],
            checked:  [ ...checked ],
            backupChecked: [...checked]
        })

    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        })
    }

    handleDelete = (e, index) => {
        const { tarefas, backupChecked } = this.state;
        let { tarefaFeita, checked, isActive } = this.state;

        const novasTarefas = [...tarefas];
        const novasTarefasFeitas = [...tarefaFeita];
        // console.log(tarefas);
        if (!isActive) {
            novasTarefas.splice(tarefas.indexOf(tarefaFeita[index]), 1);
            backupChecked.splice(tarefas.indexOf(tarefaFeita[index]), 1);

        } else {
            console.log(checked)
            novasTarefas.splice(index, 1);
            backupChecked.splice(index, 1);
            console.log(checked)
        }
        novasTarefasFeitas.splice(novasTarefasFeitas.indexOf(tarefaFeita[index]), 1);



        this.setState({
            tarefas: [...novasTarefas],
            checked: [...backupChecked],
            tarefaFeita: [...novasTarefasFeitas]
        })
    }

    handleClear = () => {
        const { tarefas } = this.state;
        const { tarefaFeita } = this.state;

        
        const novasTarefas = [...tarefas];
        tarefaFeita.splice(0)
        novasTarefas.splice(0)
        

        this.setState({
            tarefas: [...novasTarefas],
            checked: [],
            backupChecked: []
        })
    }

    active = (e, tarefa, index) => {
        let { tarefaFeita, checked } = this.state;
        const activeDiv = document.querySelectorAll('.divTarefa')
        tarefaFeita = tarefaFeita.filter((el, numIndex) => tarefaFeita.indexOf(el) === numIndex);
        

        checked[index] = e.target.checked;

        // if(tarefa === tarefaFeita[index]) return tarefaFeita.splice(index, 2);

        if(e.target.checked) {
            activeDiv[index].classList.add('strikeWord')

            tarefaFeita.push(tarefa);
            this.setState({
                tarefaFeita: [...tarefaFeita],
                checked: [...checked],
                backupChecked: [...checked]

            })

        } else {
            activeDiv[index].classList.remove('strikeWord')
            tarefaFeita.splice(tarefaFeita.indexOf(tarefa), 1)
            this.setState({
                tarefaFeita: [...tarefaFeita],
                checked: [...checked],
                backupChecked: [...checked]
            })
        }
        console.log(checked);

    }

    isCompleted = (e) => {
        let { tarefaFeita, checked, backupChecked } = this.state;
        let {isActive} = this.state;

        const selected = document.querySelectorAll('.clicked')
        selected.forEach(e => e.classList.remove('clicked'));
        
        e.target.classList.add('clicked')


        if(isActive) {
            checked = checked.map(e => true)

            this.setState({
                tarefaFeita: [...tarefaFeita],
                isActive: false,
                checked: checked
            })
        } else {
            this.setState({
                tarefaFeita: [...tarefaFeita],
                isActive: true,
                backupChecked: backupChecked

            })
        }
    }

    all = (e) => {
        let {isActive, checked, backupChecked} = this.state;
        const selected = document.querySelectorAll('.clicked');
        selected.forEach(e => e.classList.remove('clicked'));
        
        e.target.classList.add('clicked')
        
        checked = backupChecked
        if(isActive) {
            
            this.setState({
                isActive: false,
                checked: checked
            })
        } else {
            this.setState({
                isActive: true,
                checked: checked

            })
        }
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    // const [stateSend, setStateSend] = useState()
    render() {
        const { novaTarefa, tarefas, isActive } = this.state;
        let { tarefaFeita, checked } = this.state;
        
        
        return (
            <main>
                <div className='container'>
                    <Header></Header>    
                    <Form
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        novaTarefa={novaTarefa}
                        singleActive={this.singleActive}
                    ></Form>
                    <div className='content'>
                        <List
                            tarefas={isActive ? tarefas : tarefaFeita}
                            handleDelete={this.handleDelete}
                            active={this.active}
                            isActive={isActive}
                            tarefasFeitas={tarefaFeita}
                            checked={checked}
                            >
                        
                        </List>
                        <Footer
                            items={tarefas.length - tarefaFeita.length}
                            all={this.all}
                            // active={tarefas}
                            completed={this.isCompleted}
                            clear={this.handleClear}
                        >
                        </Footer>
                    </div>
                </div>

            </main>

            
        );
    }
}