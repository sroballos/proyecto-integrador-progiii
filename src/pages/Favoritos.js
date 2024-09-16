import { Component } from 'react'

export class Favoritos extends Component {


    constructor(props){
        super(props)

        this.state = {
            movies : [],
            isLoading : true
        }

    }

    componentDidMount(){

        this.setState({
            isLoading : true //pongo en true de vuelta por las dudas
        })

        const parsedArray = JSON.parse(storage)

        Promise.all( //como va a tardar, lo encierro en el promise para que resuelva primero y despues muestre todo

        parsedArray.map((id)=>{ //para cada id, pedimos la data a la API.
            fetch('url de cada pelicula con su id')
                .then(response => response.json())
                .then( movie=> 
                    this.setState({
                        movies : [...this.state.movies, movie] //esto crea un nuevo array con lo que ya tenía, y le agrega lo nuevo
                    })
                )
        })
        ) //termina el Promise.all()

        this.setState({
            isLoading : false  //ahora si lo pongo en false
        })
    }
  render() {
    return (
      <div>
        {!this.state.isLoading ? <>lo que quiera poner</> 
        : <p>loading...</p>}
      </div>
    )
  }
}

export default Favoritos