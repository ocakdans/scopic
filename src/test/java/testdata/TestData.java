package testdata;

import java.util.HashMap;
import java.util.Map;

public class TestData {

    public Map<String, Object> expTestData = new HashMap<>();


    public Map<String, Object> postTestData() {
        expTestData.put("name", "selim");
        expTestData.put("job", "po");
        return expTestData;

    }

    public Map<String, Object> putTestData() {
        expTestData.put("name", "fatih");
        expTestData.put("job", "qa");
        return expTestData;

    }
}

