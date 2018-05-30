import $ from 'jquery';
let all = [];
let count = 1;
let max = 0;

export function progressbar() {
    if(typeof document !== undefined) {
        document.onreadystatechange = function(e)
        {
            if(document.readyState=="interactive")
            {
                all = document.getElementsByTagName("*");
                max = all.length;
                for (var i=0; i < max; i++) 
                {
                    check_element(all[i]);
                }
            }
        }
    }
}

function check_element(ele)
{
  if($(ele).on())
  {
    if(count == max) {
        setTimeout('')
        $('#progressbar').remove();
    } else {
        count ++;
    }
  }
  else	
  {
    check_element(ele);
  }
}