import { createTheme } from '@mui/material/styles'
export const themeDashboard = createTheme({
    components: { //ghi đè style của các component như button, drawer ......
        // Name of the component
        MuiButton: {
            //ghi đè CSS
            styleOverrides: {
                root: {
                    // backgroundColor: 'yellow !important',
                    '&:hover': {
                        // backgroundColor: 'none'
                    }
                }
            }
        }
    },
    //color default
    palette: {
        primary: {
            main: '#ef6c00' //nếu muốn sử dụng các màu blue, black... phải import các tên màu từ @mui/material/colors
        }
    },
    //change Font
    typography: {
        fontFamily: [
            'Raleway',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    //thay dổi khoảng cách giữa các element
    spacing: 4
    //tương tự còn rất nhiều customize nữa cụ thể trong phần customization của mui
})