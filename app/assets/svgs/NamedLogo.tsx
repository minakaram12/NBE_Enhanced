import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';

interface NamedLogoProps extends SvgProps {
  textColor?: string;
}

const NamedLogo = (props: NamedLogoProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="url(#a)" d="M129.986 26.262H.036v2.396h129.95v-2.396Z" />
    <Path
      fill={props.textColor || '#007236'}
      d="M18.743 19.963c.05.526-.193.874-.5 1.024-1.423.707-2.934 1.875-3.025 1.883-.09.008-.635-.345-.21-.705 1.843-1.565 3.727-2.237 3.735-2.202ZM6.81 5.28c.12.297.266 1.163.266 1.163s-.07.332-.348.397c-.844.196-.821-1.627-.821-1.627s-.114-.316-.377-.334c-.263-.017-.477.385-.477.449 0 .067.112.689.477 1.791.362 1.1 1.147.884 1.56.77.41-.115.63-.74.757-.803.163-.08 1.18.115 1.332-.396.369-1.28-.51-2.385-.774-2.743-.261-.362-.574 0-.574 0 .464.658 1.087 2.139.56 2.35-.53.213-.857-1.1-.905-1.435-.052-.323-.102-.64-.574-.503-.479.131-.215.624-.102.92Zm31.138 16.333c-.028.347-.059.686.203.66 1.055-.116 1.578-3.843 1.663-7.604.076-3.415-.717-7.4-.835-8.03-.113-.632-.172-1.034.174-1.323.346-.287.807 0 .98-.114.17-.115.027-.37.027-.37s-2.068-3.618-2.24-3.82c-.177-.2-.346-.027-.346-.027l-1.071 1.823s.93 3.512 1.501 8.594c.466 4.108-.029 9.868-.056 10.211Zm-4.895-.678c.305-.15.548-.5.495-1.024-.003-.037-1.89.635-3.732 2.202-.426.359.116.716.206.707.094-.012 1.608-1.18 3.031-1.885Zm26.148.174c.402-.2.72-.659.656-1.35-.007-.044-2.49.84-4.916 2.898-.557.472.161.941.28.932.116-.015 2.104-1.553 3.98-2.48Zm59.563-.022c-.316-.17-1.348-.517-1.348-.517s-.26-.085-.432.088c-.171.169-1.031 1.348-1.031 1.348s-.086.261.086.343c.176.088 1.782.777 1.782.777l1.144-1.497c-.001.002.115-.367-.201-.542Zm-12.236-10.95s-.258-.082-.431.087c-.175.17-1.034 1.352-1.034 1.352s-.084.255.088.34c.172.087 1.776.775 1.776.775l1.149-1.49s.116-.373-.201-.546c-.313-.17-1.347-.518-1.347-.518Zm-1.32-1.46s4.359-3.39 12.707-6.572l.919-1.692s-6.251 1.716-13.482 6.341c-.402.257-.834 1.292-.775 1.576.052.29.343.433.631.347Zm16.749-8.4c-.176-.2-.35-.031-.35-.031l-1.069 1.824s.725 2.76 1.291 6.921l.196 1.533c.004.047.008.091.015.136.056.46.108.916.169 1.347l.383 3.038s.487 2.35-1.406 2.67c-2.379.396-2.068-2.01-1.978-2.299.086-.287-.074-.509-.318-.316-2.538 2.027-4.392 3.276-6.596 3.303-3.419.042-2.983-2.152-3.041-2.755-.068-.693-.461-.548-.633-.347-.176.2-1.492 3.045-3.357 2.842-2.338-.249-1.923-3.098-1.923-3.9 0-5.278-1.117-13.343-1.117-13.629 0-.287-.287-.228-.287-.228l-1.002 1.805c1.088 6.428 1.147 12.91 1.147 12.91s-2.267 3.85-6.913 3.877c-2.411.014-3.79-.679-4.535-1.349-.729-.657-.919-1.278-.946-1.865-.057-1.233 1.061-2.558 1.061-2.558s0-.454-.373-.627c-.37-.17-1.234.461-1.806 3.586-.575 3.128 2.725 4.817 4.733 4.909 5.882.259 8.406-3.301 8.608-3.502.2-.204.773-.774.832.257.056 1.032.829 2.757 2.725 2.695 1.892-.056 2.32-1.377 2.491-1.605.175-.229.422-.288.631.087.259.46 1.823 2.129 4.393 1.548 3.785-.852 4.68-2.657 5.104-2.666.838-.024.318 1.922 2.558 1.922 2.72 0 3.208-3.444 3.235-3.848.015-.201-.212-2.606-.456-5.03-.113-2.424-.329-4.614-.407-5.028-.115-.635-.17-1.04.169-1.323.342-.284.803 0 .977-.113.174-.117.029-.374.029-.374S122.129.483 121.957.28ZM95.254 14.874c-1.232.32-3.1-.2-3.156.027-.056.232 1.476 1.789 3.705 1.27 2.106-.483 2.36-1.49 2.636-2.1.486-1.086.255-2.667-.835-2.522-1.09.147-1.49-.373-1.49-.72 0-.343.257-.714.95-.83.682-.116.858-.688.858-.688l.028-1.09s.056-.578-.603-.46c-.659.112-1.547.92-2.093 2.036-.546 1.122-.616 2.692-.262 3.214.434.633 1.837.373 1.924.922.04.257-.429.627-1.662.941Zm32.359 5.824c-.027.346-.059.694.2.664 1.054-.117 1.577-3.85 1.66-7.608.079-3.416-.718-7.4-.828-8.033-.118-.632-.174-1.031.17-1.322.346-.287.802 0 .971-.113.176-.115.034-.372.034-.372S127.757.3 127.586.098c-.172-.2-.349-.031-.349-.031l-1.073 1.825s.929 3.513 1.505 8.59c.466 4.109-.026 9.872-.056 10.215ZM75.164 4.35c.117-.016 2.111-1.55 3.99-2.478.392-.2.714-.658.65-1.349-.01-.049-2.492.838-4.912 2.898-.56.472.153.94.272.929ZM51.287 9.81c-.53.212-.855-1.1-.906-1.43-.05-.332-.099-.643-.575-.51-.477.132-.212.626-.095.923.111.292.261 1.163.261 1.163s-.063.332-.344.398c-.847.196-.825-1.63-.825-1.63s-.117-.314-.377-.328c-.268-.016-.475.381-.475.447 0 .068.112.689.475 1.788.36 1.104 1.152.889 1.562.773.412-.112.626-.742.752-.803.158-.082 1.184.113 1.332-.396.372-1.276-.509-2.384-.772-2.74-.263-.365-.575 0-.575 0 .46.653 1.087 2.132.562 2.345Zm27.057-5.754c-.86.263-1.718 1.388-1.752 2.443-.035 1.056 1.457 1.606 1.457 1.606s-.442.667-.244 1.41c.13.511.274.318.274.318.567-1.42 1.62-1.917 2.116-2.08.492-.166.527-.394.527-.394s.458-1.55.2-1.55c-.235 0-1.126.425-1.451.59-.33.164-1.108.366-1.31.05-.426-.675.517-.667.692-.662.21.003.477-.016 1.245-.5.325-.205.22-.43.056-.663-.17-.231-.951-.833-1.81-.568ZM4.22 36.355l-2.826-5.354H.038v8.022H1.33v-5.238l2.784 5.238h1.4v-8.022H4.219v5.354Zm95.396-.87h3.463v-1.357h-3.463v-1.77h3.725V31h-5.123v8.022h5.249v-1.356h-3.851v-2.183ZM78.609 31h-1.873l-2.813 3.558V31h-1.398v8.022h1.398v-2.425l1.126-1.342 1.902 3.769h1.802l-2.738-4.903L78.609 31Zm29.254 5.064h1.598v1.025c-.217.19-.465.349-.757.481a2.09 2.09 0 0 1-.879.201 1.709 1.709 0 0 1-1.433-.711c-.363-.477-.545-1.192-.545-2.146 0-.887.182-1.55.539-1.998.357-.448.844-.676 1.45-.676.402 0 .737.114 1.006.344.274.227.448.544.553.937l1.382-.308c-.141-.73-.452-1.315-.929-1.728-.486-.42-1.152-.627-2.01-.627-.659 0-1.208.135-1.651.396a3.301 3.301 0 0 0-1.322 1.498c-.303.646-.454 1.386-.454 2.226 0 .767.134 1.485.408 2.133.265.659.677 1.163 1.21 1.514.534.353 1.161.53 1.887.53.567 0 1.127-.122 1.683-.377.554-.249.977-.54 1.267-.87v-3.194h-3.001v1.35h-.002Zm-18.206 2.958h1.399v-3.411h2.877v-1.36h-2.877V32.36h3.335v-1.357h-4.736v8.021h.002Zm34.862-8.022v1.356h2.046v6.666h1.393v-6.666H130v-1.356h-5.481Zm-10.031 3.165-1.623-3.165h-1.632l2.523 4.641v3.381h1.388V35.66l2.54-4.66h-1.602l-1.594 3.166ZM12.61 32.357h2.042v6.666h1.394v-6.666h2.044v-1.356h-5.48v1.356Zm20.892 3.998-2.83-5.354h-1.354v8.022h1.29v-5.238l2.792 5.238h1.39v-8.022h-1.288v5.354Zm-14.423 2.668h1.398v-8.022H19.08v8.022Zm25.582-7.958h-1.395v7.957h4.86v-1.35h-3.465v-6.607Zm25.083 5.29-2.829-5.354h-1.354v8.022h1.292v-5.238l2.786 5.238h1.403v-8.022h-1.296v5.354h-.002Zm-34.61-16.7c-.386 0-1.093-.24-1.621-.83-.485-.539-.73-1.605-1.19-1.479-.21.051-.648.034-1.159.264-1.27.579-3.352 1.223-5.03 1.514-1.433.245-3.776.994-6.017-.532l-.706.653s-.166-.46-.23-.755c-.066-.298.095-.579.095-.579s-1.29-1.1-2.358-.637c-.525.224-2.223 1.679-3.913 3.274-1.78 1.692-2.706 2.837-4.662 2.775-1.85-.059-2.229-1.637-2.28-2.67-.037-.86.882-2.793.882-2.793s-4.395.223-6.4-2.877c-1.504-2.32.471-6.463 1.534-7.247 1.067-.785.179 1.459-.284 2.528-.247.57-.98 2.494.105 3.87 1.352 1.701 3.305 2.122 5.09 1.856 3.844-.566 6.51-3.09 6.261-3.63-.247-.534-1.302-.09-2.56-.429-1.213-.316-1.852-.992-1.745-2.203.056-.618.49-2.53 1.78-3.73 1.544-1.437 3.162-1.732 3.592-1.785.89-.103 1.21.572 1.034 1.639-.178 1.066-.253 1.423-.966 1.318-.709-.107-.243-.678-.67-.712-.281-.025-1.199.08-2.688 1.685-.445.477-.802 1.248-.478 1.478.64.465 1.345.059 2.738.284 1.246.204 2.039.959 1.957 2.063-.108 1.463-1.817 2.942-3.489 4.095-2.167 1.492-4.477 1.816-4.477 1.816s-.645 3.38 1.382 3.488c2.032.104 4.17-3.172 5.582-4.448 1.615-1.459 2.231-1.808 3.527-2.01 1.166-.184 2.2.872 2.556 1.145.368-.571.944-1.513 1.503-2.196.44-.536 2.42-2.74 4.8-2.634 2.39.107 3.704 1.85 3.63 2.847-.068.995-.427 1.817-.354 2.061.069.254 1.792.353 1.958-1.568.112-1.242-.102-3.959-.434-6.574-.54-3.595-1.152-5.918-1.152-5.918l1.07-1.824s.18-.169.348.032c.173.205 2.236 3.817 2.236 3.817s.147.257-.026.373c-.175.114-.633-.17-.976.114-.345.284-.289.687-.17 1.322.11.61.526 5.04.481 8.428a.338.338 0 0 0 .364.2c.716-.07.932-.497 1.745-.392.822.106 2.456.712 2.213 3.24-.17 1.652-1.68 2.273-2.428 2.273Zm-6.476-4.662c.014-.431-1.248-1.6-2.454-1.814-1.21-.213-2.587.855-3.61 2.117-.775.967-.936 1.56-.936 1.56.424 1.119 2.31.61 3.38.308 2.161-.61 3.597-1.531 3.62-2.171Zm7.009 1.819c-.214-.32-.776-.602-1.03-.391-.178.14-.178.643.318 1.027.498.395.927-.319.712-.636ZM.533 6.835a.316.316 0 0 1 .139-.174c3.591-1.653 4.73-3.64 4.73-3.64C4.076 1.97 4.599.961 4.812.682 5.02.403 5.824-.347 6.416.19c.57.517.212 1.562.212 1.562l.297.387c.105 1.31-.444 1.547-.444 1.547l-.421-.324c-.487.749-2.065 2.483-4.46 3.447-.805.332-1.123.204-1.067.027ZM5.72 1.769c.82-.38.217-1.171-.161-.838-.386.339.013.916.161.838Zm35.933 8.252c.051-.151.192-.23.192-.23C46.72 7.58 48.268 4.91 48.268 4.91c-1.806-1.4-1.085-2.754-.802-3.126.289-.368 1.37-1.375 2.18-.66.78.69.29 2.096.29 2.096l.402.519c.142 1.745-.602 2.061-.602 2.061l-.579-.429c-.657 1.004-2.8 3.327-6.052 4.618-1.102.438-1.525.272-1.452.033Zm6.994-6.792c.973-.46.256-1.41-.205-1.005-.46.399.015 1.09.205 1.005ZM96.256 4.4c-1.803-1.4-1.09-2.75-.804-3.124.287-.373 1.377-1.377 2.18-.66.78.689.29 2.094.29 2.094l.402.519c.142 1.747-.607 2.061-.607 2.061l-.57-.43c-.66 1.006-2.801 3.326-6.054 4.622-1.103.44-1.53.266-1.455.029.046-.152.191-.232.191-.232 4.88-2.208 6.427-4.879 6.427-4.879Zm.375-1.63c.972-.465.257-1.408-.203-1.007-.46.4.015 1.094.203 1.006ZM72 20.772c-2.676-.362-3.008-2.41-3.236-3.569-.161-.81-1.489-.029-1.787.069-.294.097-3.135.924-5.283.793-3.834-.232-5.157-2.411-5.75-2.909-.4-.332-.658-.228-.79 0-.134.232-.1.5.2.565.294.067 1.156.263 1.352 1.125.201.855-.895 3.698-4.89 5.415-.953.412-3.8 1.62-7.37.069-.887-.391-2.674-2.346-2.704-4.627-.02-1.585 1.65-4.757 2.18-3.964.171.259-1.95 3.142-.232 5.85.328.513 1.139 1.24 2.31 1.55 1.072.284 2.468.197 3.644-.027 3.747-.72 5.401-2.71 5.543-2.979.265-.496-.563-.563-.86-.598-.298-.033-2.846.035-2.974-.099-.134-.129.262-1.878.262-1.878s.102-.368.893-.5c.79-.128 2.742-1.494 2.545-3.899-.132-1.62-.794-3.963-.889-5.878-.1-1.914.13-4.59.259-4.855.136-.263.43-.464.533.133.099.593 1.219 10.934 1.914 12.518.695 1.585 2.78 3.274 6.313 2.776 3.534-.496 4.724-.923 5.353-1.453 0 0 .627-.196.893-1.623.257-1.415 1.353-4.656 1.648-4.622.299.033 1.455 1.782 1.293 3.895-.15 1.878-.763 3.009-1.092 3.242 0 0 3.006.252 3.069 2.939.063 2.808-1.856 2.607-2.347 2.541Zm-1.752-7.138c.499.329.762-.099 1.059-.76.297-.662-.174-1.332-.397-1.25-.463.164-1.157 1.68-.662 2.01Zm2.479 4.629c-.257-.908-1.977-1.152-2.148-.927-.298.395.33.927.695 1.128.358.196 1.585.265 1.453-.201Zm9.48 0c-.125 2.545-2.212 3.235-3.2 3.172-.994-.067-1.72-.264-1.787-2.446-.067-2.178 1.854-3.603 1.854-3.603L68.533 4.78l-.2-2.442s3.77 2.379 4.129 2.642c.362.265.33.558-.165.597-.494.033-.194.537-.194.537l8.087 7.836 3.664-3.512c.257-3.055-1.017-7.99-1.017-7.99s.629-1.398.822-1.63c.2-.223.364.1.364.1l1.752 4.263s.099.263-.098.359c-.2.104-.264-.062-.563-.262-.297-.2-.46.262-.46.262l.494 3.603c1.85-1.322 7.199-8.391 7.4-8.653.2-.263.809-.491.597.36-.86 3.437-7.83 10.242-7.83 10.242s.1 5.72-.033 7.769c-.131 2.044-1.486 4.557-1.22 2.807.26-1.75 0-9.186 0-9.186l-2.742 2.746c0-.003.986.98.889 3.035Zm-1.12-.832c.028-.36-.894-1.12-.894-1.12-1.119.332-1.684 1.72-1.684 2.082 0 .363.362.594 1.353.465.991-.13 1.19-1.061 1.224-1.427ZM10.444 31.001l2.761 8.022h-1.515l-.6-1.827H8.334l-.572 1.827h-1.48l2.69-8.022h1.473Zm.2 4.847-.952-2.98-.932 2.98h1.885Zm77.008-3.887c.61.731.908 1.746.908 3.06 0 1.295-.299 2.306-.905 3.037-.606.73-1.419 1.1-2.428 1.1-1.03 0-1.842-.37-2.448-1.095-.61-.73-.908-1.73-.908-3.002 0-.82.1-1.509.32-2.06.15-.408.366-.778.636-1.103.266-.321.57-.562.893-.717.426-.21.92-.319 1.487-.319 1.018-.002 1.83.362 2.445 1.1Zm-.532 3.02c0-.92-.173-1.606-.515-2.056a1.658 1.658 0 0 0-1.383-.681c-.576 0-1.04.228-1.393.69-.35.455-.527 1.138-.527 2.072 0 .906.177 1.594.544 2.061.355.474.819.705 1.376.705.553 0 1.01-.231 1.367-.697.36-.463.531-1.165.531-2.095Zm36.347-3.083c.269.406.402.925.402 1.568 0 .493-.077.906-.235 1.241-.154.337-.346.599-.587.792a1.896 1.896 0 0 1-.719.378c-.334.078-.812.115-1.444.115h-.91v3.031h-1.393v-8.022h2.236c.852 0 1.397.038 1.656.113.394.125.726.388.994.784Zm-1.036 1.586c0-.29-.073-.53-.223-.72a.95.95 0 0 0-.562-.357c-.164-.037-.496-.051-.997-.051h-.673v2.268h.762c.545 0 .91-.035 1.105-.118a.946.946 0 0 0 .434-.397c.103-.182.154-.385.154-.625ZM27.298 31.96c.616.731.918 1.746.918 3.06 0 1.295-.302 2.306-.911 3.037-.607.73-1.41 1.1-2.426 1.1-1.029 0-1.843-.37-2.454-1.095-.606-.73-.903-1.73-.903-3.002 0-.82.102-1.509.315-2.06.151-.408.371-.778.641-1.103.274-.321.57-.564.892-.717.43-.21.925-.319 1.487-.319 1.021-.002 1.837.362 2.441 1.1Zm-.522 3.02c0-.922-.175-1.601-.518-2.058a1.666 1.666 0 0 0-1.38-.68c-.583 0-1.034.227-1.392.688-.35.457-.53 1.14-.53 2.073 0 .906.183 1.594.543 2.065.36.469.814.703 1.379.703.552 0 1.006-.234 1.362-.698.356-.462.536-1.164.536-2.092Zm12.953-3.98 2.759 8.022h-1.514l-.597-1.827h-2.765l-.568 1.827h-1.478l2.684-8.022h1.479Zm.193 4.847-.948-2.98-.935 2.98h1.883Zm22.13-4.847 2.76 8.022h-1.517l-.605-1.827h-2.758l-.567 1.827H57.88l2.696-8.022h1.476Zm.192 4.847-.953-2.98-.928 2.98h1.88Zm-5.171-.362c.223.346.336.745.336 1.21 0 .363-.07.719-.22 1.057-.147.346-.35.624-.6.83-.257.204-.56.333-.932.38-.233.032-.794.046-1.678.059h-2.357v-8.023h2.765c.541 0 .948.024 1.22.07.27.06.502.168.722.337.206.168.385.388.523.669.144.28.22.592.22.941 0 .373-.086.72-.264 1.037a1.79 1.79 0 0 1-.706.704c.419.145.74.388.97.729Zm-4.053-1.3h.911c.542 0 .886-.01 1.02-.03a.852.852 0 0 0 .56-.288c.138-.161.2-.367.2-.625 0-.25-.054-.452-.18-.599-.108-.158-.287-.249-.514-.288-.143-.018-.544-.028-1.198-.028h-.8v1.858Zm2.947 2.43c0-.24-.05-.447-.148-.61a.88.88 0 0 0-.434-.368c-.197-.082-.604-.114-1.235-.114h-1.13v2.148h1.294c.502 0 .815-.02.956-.054a.81.81 0 0 0 .5-.32c.131-.172.197-.397.197-.682Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(190.487 0 0 190.611 20.18 -.596)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.005} stopColor="#FFEB00" />
        <Stop offset={0.918} stopColor="#F06023" />
        <Stop offset={1} stopColor="#F06023" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default NamedLogo;
