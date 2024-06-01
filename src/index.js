const { __ } = wp.i18n;
const { Toolbar, ToolbarButton, ToolbarDropdownMenu } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { AlignmentToolbar, BlockControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;
const columnGridOptions = createHigherOrderComponent( BlockEdit => {
   
return ( props ) => {
  
  function removeOldAddNewSpan(newspan) {
    let classes;
    if (props.attributes.className) {
      classes = props.attributes.className;
    } else {
      classes = '';
    }
    // let classes = props.attributes.className;
    classes = classes.replace(/span\d+/g, '');
    classes = classes.replace(/grow|shrink/g, '');
    classes = classes + ' ' + newspan;
    props.setAttributes({ className: classes }); 
  }
  
  function removeOldAddNewOffset(newoffset) {
    let classes;
    if (props.attributes.className) {
      classes = props.attributes.className;
    } else {
      classes = '';
    }
    classes = classes.replace(/offset\d+/g, '');
    classes = classes + ' ' + newoffset;
    props.setAttributes({ className: classes }); 
  }

  function removeOldAddNewGridline(newgridline) {
    let classes;
    if (props.attributes.className) {
      classes = props.attributes.className;
    } else {
      classes = '';
    }
    classes = classes.replaceAll(/(\b\s+gridline(?!-)\b|\b^gridline(?!-)\b)/g, '');
    classes = classes.replaceAll(/gridline-left/g, '');
    classes = classes.replaceAll(/gridline-middle-bg/g, '');
    classes = classes.replaceAll(/\s-left/g, ' ');
    classes = classes.replaceAll(/\s-middle-bg/g, ' ');
    classes = classes + ' ' + newgridline;
    classes = classes.replace(/\s\s\s\s/g, ' ');
    classes = classes.replace(/\s\s\s/g, ' ');
    classes = classes.replace(/\s\s/g, ' ');
    props.setAttributes({ className: classes }); 
  }

  if ( 'core/column' === props.name || 'core/group' === props.name ) {
    return (
      <Fragment>
        <BlockEdit { ...props } />
        <BlockControls>
          <Toolbar label="Options" style={{borderWidth: '0'}}>
          <ToolbarDropdownMenu
            label="grow/shrink"
            icon="fullscreen-alt"
            controls={ [
                {
                    title: 'No grow/shrink',
                    icon: 'dismiss',
                    onClick: function() {
                      removeOldAddNewSpan('');
                    }
                },
                {
                    title: 'grow',
                    icon: 'fullscreen-alt',
                    onClick: function() {
                      removeOldAddNewSpan('grow');
                    }
                },
                {
                    title: 'shrink',
                    icon: 'fullscreen-exit-alt',
                    onClick: function() {
                      removeOldAddNewSpan('shrink');
                    }
                },
            ] }
          />
          <ToolbarDropdownMenu
            icon="grid-view"
            label="Select column width in formo grid"
            controls={ [
                {
                    title: 'No grid span',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan('')
                    }
                },
                {
                    title: 'span1',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span2',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span3',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span4',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span5',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span6',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span7',
                    icon: 'columns',
                    onClick: function() {
                    removeOldAddNewSpan(this.title)
                  }
                },
                {
                    title: 'span8',
                    icon: 'columns',
                    onClick: function() {
                    removeOldAddNewSpan(this.title)
                  }
                },
                {
                    title: 'span9',
                    icon: 'columns',
                    onClick: function() {
                    removeOldAddNewSpan(this.title)
                  }
                },
                {
                    title: 'span10',
                    icon: 'columns',
                    onClick: function() {
                    removeOldAddNewSpan(this.title)
                  }
                },
                {
                    title: 'span11',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
                {
                    title: 'span12',
                    icon: 'columns',
                    onClick: function() {
                      removeOldAddNewSpan(this.title)
                    }
                },
            ] }
          />
          <ToolbarDropdownMenu
            icon="exit"
            label="Grid offset"
            controls={ [
                {
                    title: 'No offset',
                    icon: 'dismiss',
                    onClick: function() {
                      removeOldAddNewOffset('')
                    }
                },
                {
                    title: 'offset1',
                    icon: 'exit',
                    onClick: function() {
                      removeOldAddNewOffset(this.title)
                    }
                },
                {
                    title: 'offset2',
                    icon: 'exit',
                    onClick: function() {
                      removeOldAddNewOffset(this.title)
                    }
                },
                {
                    title: 'offset3',
                    icon: 'exit',
                    onClick: function() {
                      removeOldAddNewOffset(this.title)
                    }
                },
                {
                    title: 'offset4',
                    icon: 'exit',
                    onClick: function() {
                      removeOldAddNewOffset(this.title)
                    }
                },
                {
                    title: 'offset5',
                    icon: 'exit',
                    onClick: function() {
                      removeOldAddNewOffset(this.title)
                    }
                },
                {
                    title: 'offset6',
                    icon: 'exit',
                    onClick: function() {
                      removeOldAddNewOffset(this.title)
                    }
                },
                {
                    title: 'offset7',
                    icon: 'exit',
                    onClick: function() {
                    removeOldAddNewOffset(this.title)
                  }
                },
                {
                    title: 'offset8',
                    icon: 'exit',
                    onClick: function() {
                    removeOldAddNewOffset(this.title)
                  }
                },
                {
                    title: 'offset9',
                    icon: 'exit',
                    onClick: function() {
                    removeOldAddNewOffset(this.title)
                  }
                },
                {
                    title: 'offset10',
                    icon: 'exit',
                    onClick: function() {
                    removeOldAddNewOffset(this.title)
                  }
                }
            ] }
          />
          <ToolbarDropdownMenu
                icon="image-flip-horizontal"
                label="Display gridline"
                controls={ [
                    {
                      title: 'No Gridline',
                      icon: 'dismiss',
                      isDisabled: false,
                      onClick: function() {
                        removeOldAddNewGridline('');
                      }
                    },
                    {
                      title: 'Gridline right',
                      icon: 'align-pull-right',
                      className: '',
                      onClick: function() {
                        removeOldAddNewGridline('gridline');
                      }
                    },
                    {
                      title: 'Gridline left',
                      icon: 'align-pull-left',
                      className: '',
                      onClick: function() {
                        removeOldAddNewGridline('gridline-left');
                      }
                    },
                    {
                      title: 'Gridline middle',
                      icon: 'image-flip-horizontal',
                      className: '',
                      onClick: function() {
                        removeOldAddNewGridline('gridline-middle-bg');
                      }
                    },
                    
                ] }
            />
            
          </Toolbar>
        </BlockControls>
      </Fragment>
    );
  }

  return <BlockEdit { ...props } />;
};
}, 'columnGridOptions' );

addFilter( 'editor.BlockEdit', 'themeisle-gutenberg/gallery-extension', columnGridOptions );