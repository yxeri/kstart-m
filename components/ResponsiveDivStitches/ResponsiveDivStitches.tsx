import { styled, createStitches } from '@stitches/react';
import { useRecoilValue } from 'recoil';
import { DarkMode } from '../../atoms/DarkMode';

function ResponsiveDivStitches(){

    const darkMode = useRecoilValue(DarkMode);

    const { styled } = createStitches({
        media:{
            bp0:'(min-width:1312px)',
            bp1:'(min-width:992px) and (max-width:1311px)',
            bp2:'(min-width:688px) and (max-width:991px)',
            bp3:'(max-width:687px)',
        }
    });

    const OuterDiv = styled('div', {
        display:'grid',
        gap:'20px',
        marginTop:'20px',

        '@bp0':{gridTemplateColumns:'1fr 1fr 1fr 1fr'},
        '@bp1':{gridTemplateColumns:'1fr 1fr 1fr'},
        '@bp2':{gridTemplateColumns:'1fr 1fr'},
        '@bp3':{gridTemplateColumns:'1fr'}
    });

    const InnerDiv = styled('div', {
        padding:'10px',
        
        variants:{
            darkMode:{
                dark:{
                    backgroundColor:'white',
                    color:'#3b3b3b'
                },

                light:{
                    backgroundColor:'#3b3b3b',
                    color:'white'
                }
            }
        }
    });

    return(
        <OuterDiv>
            <InnerDiv darkMode={darkMode ? 'dark' : 'light'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut nunc quis augue aliquet cursus. Suspendisse id lectus nec arcu ornare commodo. Integer porta elit sem, at tincidunt erat suscipit id. Vestibulum sit amet vestibulum eros, ultricies sollicitudin massa. Suspendisse vulputate at dui vitae tincidunt. Suspendisse rhoncus eu purus id maximus. In hac habitasse platea dictumst. Curabitur eget viverra ante. Vestibulum ac tortor eu lorem dapibus vehicula ac sed metus.</InnerDiv>
            <InnerDiv darkMode={darkMode ? 'dark' : 'light'}>In porta elit ut dui venenatis, ut scelerisque diam aliquet. Proin at gravida est. Vestibulum gravida pharetra diam, aliquet mattis ante suscipit vitae. Duis ac tortor dictum, molestie augue nec, tristique risus. Maecenas molestie tellus justo, in accumsan tortor convallis a. Sed non arcu eget mauris varius mattis eu a urna. Nulla tempor iaculis nibh, fermentum finibus nibh scelerisque vitae. Donec luctus velit ipsum, et mollis leo pellentesque vitae. Curabitur sollicitudin lorem et diam consequat, ac rhoncus felis pellentesque.</InnerDiv>
            <InnerDiv darkMode={darkMode ? 'dark' : 'light'}>Nullam eleifend dolor massa, eu tempor metus laoreet sit amet. Duis varius consequat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan libero commodo, interdum turpis et, rutrum justo. Donec in dolor lorem. Sed sit amet interdum massa. Phasellus ultricies efficitur gravida. Praesent volutpat condimentum purus vitae mattis.</InnerDiv>
            <InnerDiv darkMode={darkMode ? 'dark' : 'light'}>Curabitur rhoncus ac nisi a eleifend. Maecenas velit purus, ullamcorper sit amet nulla eget, sollicitudin tempus metus. Duis consectetur pellentesque nibh, quis placerat enim tincidunt nec. Nulla eu est eget nulla rutrum varius. Praesent in tellus nec nisi blandit consectetur ut sed neque. Aliquam ut eros congue, tempor ante quis, commodo neque. Mauris lacinia pharetra sollicitudin. Suspendisse sit amet ligula erat. Curabitur eget augue turpis. Ut porta eu odio vel semper. Suspendisse commodo sollicitudin imperdiet. Aliquam dignissim bibendum augue. Nullam sollicitudin bibendum magna, ac ultricies sapien interdum ac. Curabitur rutrum, justo posuere pharetra finibus, dui tellus dapibus lectus, sit amet porta mi sem sit amet massa. Suspendisse augue dolor, fringilla quis risus ut, bibendum lobortis quam. Praesent feugiat bibendum viverra.</InnerDiv>
        </OuterDiv>
    );
}

export default ResponsiveDivStitches;