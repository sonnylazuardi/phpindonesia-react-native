package com.phpindonesia;

import com.facebook.react.ReactActivity;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.burnweb.rnsendintent.RNSendIntentPackage;

import android.os.Bundle;

import java.util.Arrays;
import java.util.List;
import com.microsoft.codepush.react.CodePush;

public class MainActivity extends ReactActivity {
    private CodePush codePush;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        codePush = new CodePush("Skioeyf-je_RLvJQ38-viVhZB_P0EJgRtxpWl", this, BuildConfig.DEBUG);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected String getJSBundleFile() {
        return this.codePush.getBundleUrl("index.android.bundle");
    }
  

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "PHPIndonesia";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            this.codePush.getReactPackage(),
            new LinearGradientPackage(),
            new RNSendIntentPackage()
        );
    }
}
