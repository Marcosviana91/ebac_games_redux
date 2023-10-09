import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState, //Uma propriedade com o nome de uma variavel/constante, autmaticamente puxa o valor da variavel/constante
  reducers: {
    // function adicionarAoCarrinho(jogo: Game) {
    //   if (carrinho.find((game) => game.id === jogo.id)) {
    //     alert('Item já adicionado')
    //   } else {
    //     setCarrinho([...carrinho, jogo])
    //   }
    // }
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já no carrinho')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
