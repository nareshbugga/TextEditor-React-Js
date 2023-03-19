import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  SubContainer,
  Image,
  Heading,
  UnOrderList,
  Container,
  TextArea,
  Button,
} from './StyledComponent'

class TextEditor extends Component {
  state = {bold: true, italic: true, underLine: true}

  onBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onUnderLine = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  render() {
    const {bold, italic, underLine} = this.state
    const Bold = bold ? '#f1f5f9' : '#faff00'
    const Italic = italic ? '#f1f5f9' : '#faff00'
    const UnderLine = underLine ? '#f1f5f9' : '#faff00'
    return (
      <MainContainer>
        <SubContainer>
          <div>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <Container>
            <UnOrderList>
              <li>
                <Button data-testid="bold" value={Bold} onClick={this.onBold}>
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  value={Italic}
                  onClick={this.onItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  value={UnderLine}
                  onClick={this.onUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </UnOrderList>
            <TextArea
              cols={45}
              rows={15}
              bold={bold}
              italic={italic}
              underLine={underLine}
            />
          </Container>
        </SubContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
