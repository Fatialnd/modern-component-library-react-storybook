import 'minireset.css'
import '../styles/global.css'
import '../styles/tokens.css'


const getStyles = ({__sb}) => ({
  display: "flex",
  flexDirection: __sb?.fd || "column",
  maxHeight: __sb?.mh || "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: __sb?.fw || "wrap",
  height: "100%",
  gap: "10px 30px"
});


export const decorators = [
  (Story) => (
    <div style={getStyles(parameters)}>
        <Story />
    </div>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}