import java.io.*;

public class FileBrowser {
    static String rootPath = "files";
    public static void main(String[] args){

        System.out.println("File Explorer\n");

        //Checks whether a starting point folder has been specified
        if(args.length > 0){
           File pathTemp = new File (args[0]);

           //Checks if the folder exists
           if(pathTemp.exists() && pathTemp.isDirectory()){
                rootPath=args[0];
           }
           else{
                System.out.println("The specified folder does not exist, so the application is using the default folder (files/): ");
           }
        }

        System.out.println("The search has begun... \n"); 

        //Start the search
        navigate(new File(rootPath), 0);

        System.out.println("\nThe search was successful!");
        
    }

    static void navigate(File rootPath, int levelPath){
        System.out.println(generateSpaces(levelPath) + rootPath.getName() + "/");
        
        //Get all files from current folder
        File[] files = rootPath.listFiles();

        for(int x= 0; x < files.length; x++){
            //If it is a folder, call the navigate function again
           if(files[x].isDirectory()){
                //Continue searching in subdirectories
                navigate(files[x], levelPath+1);
           }
           else{
                System.out.println(generateSpaces(levelPath+1) + files[x].getName());
           }
        }
    }

    //Generates the spaces to have a kind of folder hierarchy
    static String generateSpaces(int count){
        String res = "";
      
        for(int x =0; x < count; x++){
            res+="  ";
        }

        return res;
    }   
}