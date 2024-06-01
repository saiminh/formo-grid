console.log('addFormoGrid.js');

// import { Toolbar, ToolbarButton } from '@wordpress/components';
// import { edit } from '@wordpress/icons';

// function MyToolbar() {
//     return (
//         <Toolbar label="Options">
//             <ToolbarButton
//                 icon={ edit }
//                 label="Edit"
//                 onClick={ () => alert( 'Editing' ) }
//             />
//         </Toolbar>
//     );
// }
// window.wp.richtext.registerFormatType('advanced/hank', {
//   title: ' Hank',
//   tagName: 'span',
//   className: 'hank',
//   edit ({ isActive, value, onChange }) {
//     const onToggle = () => onChange(window.wp.richText.toggleFormat(value, { type: 'advanced/hank' }))

//     return (
//       window.wp.element.createElement(Fragment, null,
//         window.wp.element.createElement(window.wp.blockEditor.RichTextToolbarButton, {
//           title: ' Hank',
//           icon: 'car',
//           onClick: onToggle,
//           isActive,
//           className: 'toolbar-button-with-text toolbar-button__advanced-hank'
//         })
//       )
//     )
//   }
// })