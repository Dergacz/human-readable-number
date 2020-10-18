module.exports = function toReadable (number) {
    let a = '';
    let b = '';
    let c = '';
    let numberStr = number.toString().split('');
    console.log(number);
    
    if (numberStr.length > 2){
        switch (numberStr[0]){
            
            case ('1'):
                a = 'one hundred';
                
                break;
                case ('2'):
                    a = 'two hundred';
                
                break;
                case ('3'):
                    a = 'three hundred';
                
                break;
                case ('4'):
                    a = 'four hundred';
                
                break;
                case ('5'):
                    a = 'five hundred';
               
                break;
                case ('6'):
                    a = 'six hundred';
                
                break;
                case ('7'):
                    a = 'seven hundred';
                
                break;
                case ('8'):
                    a = 'eight hundred';
                
                break;
                case ('9'):
                    a = 'nine hundred';
                
                break;
                
        }
        switch (numberStr[1]){
            case ('2'):
                b = " twenty";
                
                break;
                case ('3'):
                    b = ' thirty';
                
                break;
                case ('4'):
                    b = ' forty';
                
                break;
                case ('5'):
                    b = ' fifty';
                
                break;
                case ('6'):
                    b = ' sixty';
                
                break;
                case ('7'):
                    b = ' seventy';
               
                break;
                case ('8'):
                    b =  ' eighty';
                
                break;
                case ('9'):
                    b = ' ninety';
                
                break;
                default:
                    b='';
                    break;
                
        }
        if (numberStr[1] == '1'){
            switch (numberStr[2]){
            case ('0'):
                c = ' ten';
            
            break;
            case ('1'):
                c = ' eleven';
            
            break;
            case ('2'):
                c = ' twelve';
            
            break;
            case ('3'):
                c = ' thirteen';
            
            break;
            case ('4'):
                c = ' fourteen';
            
            break;
            case ('5'):
                c = ' fifteen';
            
            break;
            case ('6'):
                c = ' sixteen';
            
            break;
            case ('7'):
                c = ' seventeen';
           
            break;
            case ('8'):
                c = ' eighteen';
            
            break;
            case '9':
                c = ' nineteen';
            
            break;
        }
    }
    else{
        switch (numberStr[2]){
            case ('1'):
                c = ' one';
                
                break;
                case ('2'):
                    c = ' two';
                
                break;
                case ('3'):
                    c = ' three';
                
                break;
                case ('4'):
                    c = ' four';
                
                break;
                case ('5'):
                    c = ' five';
                
                break;
                case ('6'):
                    c = ' six';
                
                break;
                case ('7'):
                    c = ' seven';
                
                break;
                case ('8'):
                    c = ' eight';
               
                break;
                case ('9'):
                    c =  ' nine';
                
                break;
        
}
    }
    
    }
        


        
         if (numberStr.length == 2){
            switch (numberStr[0]){
                case ('2'):
                    b = 'twenty';
                    
                    break;
                    case ('3'):
                        b = 'thirty';
                    
                    break;
                    case ('4'):
                        b = 'forty';
                    
                    break;
                    case ('5'):
                        b = 'fifty';
                    
                    break;
                    case ('6'):
                        b = 'sixty';
                    
                    break;
                    case ('7'):
                        b = 'seventy';
                   
                    break;
                    case ('8'):
                        b =  'eighty';
                    
                    break;
                    case ('9'):
                        b = 'ninety';
                    
                    break;
                    default:
                        b='';
                        break;
                    
            }
            if (numberStr[0] == '1'){
                switch (numberStr[1]){
                case ('0'):
                    c = 'ten';
                
                break;
                case ('1'):
                    c = 'eleven';
                
                break;
                case ('2'):
                    c = 'twelve';
                
                break;
                case ('3'):
                    c = 'thirteen';
                
                break;
                case ('4'):
                    c = 'fourteen';
                
                break;
                case ('5'):
                    c = 'fifteen';
                
                break;
                case ('6'):
                    c = 'sixteen';
                
                break;
                case ('7'):
                    c = 'seventeen';
               
                break;
                case ('8'):
                    c = 'eighteen';
                
                break;
                case '9':
                    c = 'nineteen';
                
                break;
            }
        }
        else{
            switch (numberStr[1]){
                case ('1'):
                    c = ' one';
                    
                    break;
                    case ('2'):
                        c = ' two';
                    
                    break;
                    case ('3'):
                        c = ' three';
                    
                    break;
                    case ('4'):
                        c = ' four';
                    
                    break;
                    case ('5'):
                        c = ' five';
                    
                    break;
                    case ('6'):
                        c = ' six';
                    
                    break;
                    case ('7'):
                        c = ' seven';
                    
                    break;
                    case ('8'):
                        c = ' eight';
                   
                    break;
                    case ('9'):
                        c =  ' nine';
                    
                    break;
            
    }
        }
        
        }
       
        
                 if (numberStr.length == 1){
                  
            
                    switch (numberStr[0]){
                        case ('1'):
                            c = 'one';
                            
                            break;
                            case ('2'):
                                c = 'two';
                            
                            break;
                            case ('3'):
                                c = 'three';
                            
                            break;
                            case ('4'):
                                c = 'four';
                            
                            break;
                            case ('5'):
                                c = 'five';
                            
                            break;
                            case ('6'):
                                c = 'six';
                            
                            break;
                            case ('7'):
                                c = 'seven';
                            
                            break;
                            case ('8'):
                                c = 'eight';
                           
                            break;
                            case ('9'):
                                c =  'nine';
                            
                            break;
                    
            }
            
            
                }
                if (number == 0){
                    return 'zero';
                }
                
                return a + b + c;
              
        
    }

  
