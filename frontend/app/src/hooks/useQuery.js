import { useHistory, useLocation } from 'react-router-dom'
// should take an instance of url search params

export function useQuery(param = "", def) {
    const history = useHistory()
    const data = new URLSearchParams(useLocation().search);

    const setQuery = (value, p = param) => {
        data.set(p, value);
        history.push({ 
            search: data.toString()
        })
    }
  
    let value = data.get(param);
    if (value === null) {
      value = def;
    }

    return [value, setQuery];
} 
