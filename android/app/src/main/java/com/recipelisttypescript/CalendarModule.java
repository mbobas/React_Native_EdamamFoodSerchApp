package com.recipelisttypescript; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import java.util.Random;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String suggestMeal() {
        String[] array = { "Coffe", "Tea", "Beef", "Tomato", "Salad", "Soup", "Salami", " Chicken", "Breed", "Chees",
                "Kimchi", "Orange" };
        int rnd = new Random().nextInt(array.length);
        return array[rnd];
    }

}