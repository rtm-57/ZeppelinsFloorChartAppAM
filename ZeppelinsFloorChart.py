import tkinter as tk
from tkinter import messagebox
import time

class TimerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Multiple Button Press Timer")
        
        # Initialize variables
        self.buttons_data = {}  # Store button data (start time and press count)
        self.buttons_widgets = {}  # Store button widgets
        self.server_labels = []
        self.lines = []  # Store references to drawn lines
        
        # Default button colors
        self.default_colors = {
            "default": "lightgray",
            "green": "green",
            "yellow": "yellow",
            "red": "red"
        }
        
        # Draw canvas
        self.canvas = tk.Canvas(self.root, width=1600, height=800, bg="white", bd=0, highlightthickness=0)
        self.canvas.grid(row=0, column=0, rowspan=20, columnspan=50)  # Grid position for canvas

        #assign number


        # Show pop-up on start
        self.show_popup()
        
        # Create standard buttons
        self.create_Hbutton("AB 4", x=50, y=50)
        self.create_Hbutton("AB 5", x=50, y=125)
        self.create_Hbutton("AB 6", x=50, y=200)
        self.create_Hbutton("AB 7", x=50, y=275)
        self.create_Hbutton("AB 8", x=50, y=350)
        self.create_Vbutton("AB 3", x=150, y=425)
        self.create_Vbutton("AB 2", x=250, y=425)
        self.create_Vbutton("AB 1", x=350, y=425)
        self.create_Hbutton("BB 1", x=400, y=50)
        self.create_Hbutton("BB 2", x=400, y=350)
        self.create_Hbutton("BT 7", x=400, y=125)
        self.create_Vbutton("BT 5", x=600, y=125)
        self.create_Vbutton("BT 4", x=700, y=125)
        self.create_Vbutton("BT 3", x=800, y=125)
        self.create_Vbutton("BT 2", x=900, y=125)
        self.create_Vbutton("CT 1", x=1000, y=225)
        self.create_Vbutton("CT 2", x=1000, y=300)
        self.create_Vbutton("CT 3", x=1000, y=375)
        self.create_Vbutton("GT 1", x=950, y=25)
        self.create_Vbutton("GT 2", x=875, y=25)
        self.create_Vbutton("GT 3", x=800, y=25)
        self.create_Vbutton("GT 4", x=725, y=25)
        self.create_Vbutton("GT 5", x=650, y=25)
        self.create_Hbutton("RT 9", x=1075, y=275)
        self.create_Hbutton("RT 10", x=1075, y=375)
        self.create_Hbutton("RB 1", x=1400, y=125)
        self.create_Hbutton("RB 2", x=1400, y=200)
        self.create_Hbutton("RB 3", x=1400, y=275)
        self.create_Hbutton("RB 4", x=1400, y=350)
        self.create_Hbutton("ZB 1",  x=1400, y=475)
        self.create_Hbutton("ZB 2",  x=1400, y=550)
        self.create_Hbutton("ZB 3",  x=1400, y=625)
        self.create_Hbutton("ZB 4",  x=1400, y=700)
        self.create_Vbutton("ZT 5", x=1200, y=450)
        self.create_Vbutton("ZT 6", x=1200, y=550)
        self.create_Vbutton("ZT 7", x=1200, y=625)
        self.create_Vbutton("ZT 8", x=1200, y=725)
        self.create_Vbutton("ZT 1", x=1300, y=450)
        self.create_Vbutton("ZT 2", x=1300, y=550)
        self.create_Vbutton("ZT 3", x=1300, y=625)
        self.create_Vbutton("ZT 4", x=1300, y=725)
        
        #diamond buttons
        self.create_diagonal_button("AT 3", x=4, y=0)
        self.create_diagonal_button("AT 1", x=6, y=0)
        self.create_diagonal_button("AT 4", x=4, y=1)
        self.create_diagonal_button("AT 5", x=4, y=2)
        self.create_diagonal_button("AT 6", x=4, y=3)
        self.create_diagonal_button("AT 7", x=6, y=2)
        self.create_diagonal_button("RT 6", x=39, y=1)
        self.create_diagonal_button("RT 7", x=39, y=2)
        self.create_diagonal_button("RT 8", x=39, y=3)
        self.create_diagonal_button("RT 3", x=40, y=1)
        self.create_diagonal_button("RT 4", x=40, y=2)
        self.create_diagonal_button("RT 5", x=40, y=3)
        
        #circular buttons
        self.create_circular_button("AT 2", x=6, y=3, size=70)
        self.create_circular_button("BT 8", x=8, y=2, size=70)
        self.create_circular_button("BT 1", x=33, y=1, size=40)
        self.create_circular_button("RT 1", x=40, y=0, size=70)
        self.create_circular_button("RT 2", x=39, y=0, size=70)
        
        
        #Add reset button
        reset_button = tk.Button(self.root, text="Reset", command=self.reset_all, bg="orange", height=2, width=15)
        reset_button.grid(row=16, column=0, columnspan=4, padx=4, pady=4)
         
        #Cut buttons
        FC_button = tk.Button(self.root, text="First Cut", command=self.FC_func, bg="blue", height=2, width=15)
        FC_button.grid(row=14, column=0, columnspan=4, padx=4, pady=4)
        SC_button = tk.Button(self.root, text="Second Cut", command=self.SC_func, bg="blue", height=2, width=15)
        SC_button.grid(row=15, column=0, columnspan=4, padx=4, pady=4)
        
        # Start the periodic color update
        self.update_button_colors()

        
    def FC_func(self):
        # Clear any previous drawings
        for line in self.lines:
            self.canvas.delete(line)
        self.lines.clear()
        
        label4=self.server_labels[3]
        label4.destroy()
        if len(self.server_labels)==5:
            label5=self.server_labels[4]
            label5.destroy()
        elif len(self.server_labels)==6:
            label5=self.server_labels[4]
            label5.destroy()
            label6=self.server_labels[5]
            label6.destroy()
        elif len(self.server_labels)==8:
            label5=self.server_labels[4]
            label5.destroy()
            label6=self.server_labels[5]
            label6.destroy()
            label8=self.server_labels[7]
            label8.destroy()
        elif len(self.server_labels)==9:
            label5=self.server_labels[4]
            label5.destroy()
            label6=self.server_labels[5]
            label6.destroy()
            label8=self.server_labels[7]
            label8.destroy()
            label9=self.server_labels[8]
            label9.destroy()
        

        
        self.design_lines(number=1)
        
    def SC_func(self):
        # Clear any previous drawings
        for line in self.lines:
            self.canvas.delete(line)
        self.lines.clear()
        
        
        label3=self.server_labels[2]
        label3.destroy()
        label4=self.server_labels[3]
        label4.destroy()
        if len(self.server_labels)==5:
            label5=self.server_labels[4]
            label5.destroy()
        elif len(self.server_labels)==6:
            label5=self.server_labels[4]
            label5.destroy()
            label6=self.server_labels[5]
            label6.destroy()
        elif len(self.server_labels)==8:
            label5=self.server_labels[4]
            label5.destroy()
            label6=self.server_labels[5]
            label6.destroy()
            label7=self.server_labels[6]
            label7.destroy()
            label8=self.server_labels[7]
            label8.destroy()
        elif len(self.server_labels)==9:
            label5=self.server_labels[4]
            label5.destroy()
            label6=self.server_labels[5]
            label6.destroy()
            label7=self.server_labels[6]
            label7.destroy()
            label8=self.server_labels[7]
            label8.destroy()
            label9=self.server_labels[8]
            label9.destroy()
        
        
        self.design_lines(number=2)
        
        
    def create_Hbutton(self, text, x, y, width=10, height=2):
        """Creates a button and places it on the canvas."""
        self.buttons_data[text] = {"start_time": None, "press_count": 0}
        button = tk.Button(
            self.root,
            text=text,
            width=width,
            height=height,
            bg=self.default_colors["default"],
            command=lambda t=text: self.button_pressed(t),
        )
        self.canvas.create_window(x, y, window=button)  # Place button at (x, y)
        self.buttons_widgets[text] = button
        
    def create_Vbutton(self, text, x, y, width=5, height=4):
        """Creates a button and places it on the canvas."""
        self.buttons_data[text] = {"start_time": None, "press_count": 0}
        button = tk.Button(
            self.root,
            text=text,
            width=width,
            height=height,
            bg=self.default_colors["default"],
            command=lambda t=text: self.button_pressed(t),
        )
        self.canvas.create_window(x, y, window=button)  # Place button at (x, y)
        self.buttons_widgets[text] = button


    # Include `create_diagonal_button`, `create_circular_button`, `button_pressed`, and others...

    def create_diagonal_button(self, text, x, y, size=50):
        """Creates a diagonal-shaped button with text within the same grid layout."""
        self.buttons_data[text] = {"start_time": None, "press_count": 0}
        
        # Calculate the size ratio for scaling (adjust the scale to fit your grid)
        grid_width = 10  # Width of your grid unit (can be adjusted)
        grid_height = 2  # Height of your grid unit (can be adjusted)
        
        # Create a Canvas to draw the diagonal shape
        canvas = tk.Canvas(self.root, width=size, height=size)
        
        # Instead of creating a window, we place it using grid directly
        # Adjust the row and column positioning
        canvas.grid(row=y, column=x, padx=1, pady=1)
        
        # Draw a diamond shape
        coords = [size // 2, 0, size, size // 2, size // 2, size, 0, size // 2]
        shape = canvas.create_polygon(
            coords, 
            fill=self.default_colors["default"], 
            outline="black"
        )
        
        # Add text to the center of the diamond
        text_item = canvas.create_text(
            size // 2, size // 2, 
            text=text, 
            fill="black", 
            font=("Arial", 12)
        )
        
        # Bind events to the shape and text
        canvas.tag_bind(shape, "<Button-1>", lambda e, t=text: self.button_pressed(t))
        canvas.tag_bind(text_item, "<Button-1>", lambda e, t=text: self.button_pressed(t))
        
        # Store the Canvas in the widgets dictionary
        self.buttons_widgets[text] = canvas
    
    def create_circular_button(self, text, x, y, size):
        """Creates a circular button with text."""
        self.buttons_data[text] = {"start_time": None, "press_count": 0}
        
        # Create a Canvas to draw the circular shape
        canvas = tk.Canvas(self.root, width=size, height=size)
        canvas.grid(row=y, column=x, padx=1, pady=1)
        
        # Draw a circle
        shape = canvas.create_oval(
            0, 0, size, size, 
            fill=self.default_colors["default"], 
            outline="black"
        )
        
        # Add text to the center of the circle
        text_item = canvas.create_text(
            size // 2, size // 2, 
            text=text, 
            fill="black", 
            font=("Arial", 12)
        )
        
        # Bind events to the shape and text
        canvas.tag_bind(shape, "<Button-1>", lambda e, t=text: self.button_pressed(t))
        canvas.tag_bind(text_item, "<Button-1>", lambda e, t=text: self.button_pressed(t))
        
        # Store the Canvas in the widgets dictionary
        self.buttons_widgets[text] = canvas

    def button_pressed(self, button_text):
        """Handles button press logic."""
        button_data = self.buttons_data[button_text]
        button_data["press_count"] += 1
        
        if button_data["press_count"] % 2 == 1:
            # Start the timer
            button_data["start_time"] = time.time()
        else:
            # Stop the timer
            button_data["start_time"] = None

    def reset_all(self):
        """Reset all button states and show popup."""
        # Reset button colors and timer data
        for button_text, data in self.buttons_data.items():
            data["start_time"] = None
            data["press_count"] = 0
            widget = self.buttons_widgets[button_text]
            if isinstance(widget, tk.Canvas):
                widget.itemconfig(widget.find_all()[0], fill=self.default_colors["default"])
            else:
                widget.config(bg=self.default_colors["default"])    

        # Delete the server name labels
        for label in self.server_labels:
            label.destroy()
        self.server_labels.clear()  # Clear the list of labels

        # Show the popup after resetting
        self.show_popup("Reset Successful", "All buttons have been reset.\n\nHow many servers are on?")

        
    def show_popup(self, title="Welcome!", message="This is the Zeppelins Floor Chart Timer App.\n\nHow many servers are on this shift?"):
        """Show a popup message with number buttons."""
        popup = tk.Toplevel(self.root)
        popup.title(title)
        
        # Ensure the popup stays on top of the main window
        popup.attributes("-topmost", True)
    
        # Display the message
        message_label = tk.Label(popup, text=message, font=("Arial", 12), wraplength=300)
        message_label.grid(row=0, column=0, columnspan=3, padx=10, pady=10)
        
        # Create number buttons (0-9)
        for i in range(4,10,1):
            btn = tk.Button(
                popup,
                text=str(i),
                width=5,
                height=2,
                command=lambda n=i, parent=popup: self.number_pressed(n, parent)
            )
            btn.grid(row=1 + i // 3, column=i % 3, padx=5, pady=5)
    
        # Close button
        close_button = tk.Button(popup, text="Close", command=popup.destroy, bg="red", fg="white")
        close_button.grid(row=5, column=0, columnspan=3, pady=10)


    def number_pressed(self, number, parent_popup):
        """Handles when a number button is pressed."""
        if parent_popup:  # Ensure parent_popup exists
            parent_popup.destroy()  # Close the previous popup
        self.design_lines(number)
        self.show_text_input_popup(number)
        
    def design_lines(self, number):
        """ Design lines based on the number of servers. """
        # Clear any previous drawings
        for line in self.lines:
            self.canvas.delete(line)
        self.lines.clear()
        

        # Define connections based on the number
        if number == 4:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,425)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            
            #Bar
            self.draw_Oline(750,425,750,200)
            self.draw_Oline(750,200,450,200)
            self.draw_Oline(450,200,450,380)
            self.draw_Oline(450,380,350,380)
            self.draw_Oline(350,380,350,5)
            #unique to 4&5
            self.draw_Oline(750,200,850,200)
            self.draw_Oline(850,200,850,75)
            
            #TD
            self.draw_Oline(1450,310,1350,310)
            self.draw_Oline(1350,310,1350,275)
            self.draw_Oline(1350,275,1265,275)
            self.draw_Oline(1265,275,1265,180)
            self.draw_Oline(1265,180,1100,180)
            self.draw_Oline(1100,180,1100,75)

            #Else  
            self.draw_Oline(1030,425,1030,225)
            self.draw_Oline(1100,75,1075,75)
            self.draw_Oline(1450,510,1350,510)
            self.draw_Oline(1350,510,1350,390)
            self.draw_Oline(1350,390,1250,390)
            self.draw_Oline(1250,390,1250,670)
            self.draw_Oline(1250,670,1125,670)
            self.draw_Oline(1030,225,1030,75)
            
 
        elif number==5:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,425)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            
            #Bar
            self.draw_Oline(750,425,750,200)
            self.draw_Oline(750,200,450,200)
            self.draw_Oline(450,200,450,380)
            self.draw_Oline(450,380,350,380)
            self.draw_Oline(350,380,350,5)
            #unique to 4&5
            self.draw_Oline(750,200,850,200)
            self.draw_Oline(850,200,850,75)
            
            #4 servers on dining
            self.draw_Oline(1030,425,1030,225)
            self.draw_Oline(1100,75,1075,75)
            self.draw_Oline(1450,585,1350,585)
            self.draw_Oline(1350,585,1350,410)
            self.draw_Oline(1350,410,1250,410)
            self.draw_Oline(1250,410,1250,670)
            self.draw_Oline(1250,670,1125,670)
            self.draw_Oline(1030,225,1030,75)
            self.draw_Oline(1450,385,1125,385)
            self.draw_Oline(1125,385,1125,225)
            self.draw_Oline(1125,225,1030,225)
            self.draw_Oline(1450,240,1350,240)
            self.draw_Oline(1350,240,1350,185)
            self.draw_Oline(1350,185,1125,185)
            self.draw_Oline(1125,185,1125,75)
            self.draw_Oline(1125,75,1100,75)
            
        elif number==6:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,425)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            
            #Bar w/ cove
            self.draw_Oline(750,425,750,75)
            self.draw_Oline(750,200,450,200)
            self.draw_Oline(450,200,450,380)
            self.draw_Oline(450,380,350,380)
            self.draw_Oline(350,380,350,5)

            
            #4 servers on dining
            self.draw_Oline(1030,425,1030,225)
            self.draw_Oline(1100,75,1075,75)
            self.draw_Oline(1450,585,1350,585)
            self.draw_Oline(1350,585,1350,410)
            self.draw_Oline(1350,410,1250,410)
            self.draw_Oline(1250,410,1250,670)
            self.draw_Oline(1250,670,1125,670)
            self.draw_Oline(1030,225,1030,75)
            self.draw_Oline(1450,385,1125,385)
            self.draw_Oline(1125,385,1125,225)
            self.draw_Oline(1125,225,1030,225)
            self.draw_Oline(1450,240,1355,240)
            self.draw_Oline(1355,240,1355,185)
            self.draw_Oline(1355,185,1125,185)
            self.draw_Oline(1125,185,1125,75)
            self.draw_Oline(1125,75,1100,75)
              
        elif number==7:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,425)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            
            #Bar w/ cove
            self.draw_Oline(750,425,750,75)
            self.draw_Oline(750,200,450,200)
            self.draw_Oline(450,200,450,380)
            self.draw_Oline(450,380,350,380)
            self.draw_Oline(350,380,350,5)
      
            #TD
            self.draw_Oline(1450,310,1340,310)
            self.draw_Oline(1340,310,1340,280)
            self.draw_Oline(1340,310,1340,280)
            self.draw_Oline(1340,280,1280,280)
            self.draw_Oline(1280,280,1280,180)
            self.draw_Oline(1280,180,1100,180)
            self.draw_Oline(1100,180,1100,75)

            #Else  
            self.draw_Oline(1030,425,1030,225)
            self.draw_Oline(1100,75,1075,75)
            self.draw_Oline(1450,510,1350,510)
            self.draw_Oline(1350,510,1350,390)
            self.draw_Oline(1350,390,1250,390)
            self.draw_Oline(1250,390,1250,670)
            self.draw_Oline(1250,670,1125,670)
            self.draw_Oline(1030,225,1030,75)
            self.draw_Oline(0,240,100,240)
            self.draw_Oline(100,240,100,270)
            self.draw_Oline(100,270,350,270)
            
        elif number==8:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,425)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            
            #Bar w/ cove
            self.draw_Oline(750,425,750,75)
            self.draw_Oline(750,200,450,200)
            self.draw_Oline(450,200,450,380)
            self.draw_Oline(450,380,320,380)
            self.draw_Oline(320,380,320,5)

            
            #4 servers on dining
            self.draw_Oline(1030,425,1030,225)
            self.draw_Oline(1100,75,1075,75)
            self.draw_Oline(1450,585,1350,585)
            self.draw_Oline(1350,585,1350,410)
            self.draw_Oline(1350,410,1250,410)
            self.draw_Oline(1250,410,1250,670)
            self.draw_Oline(1250,670,1125,670)
            self.draw_Oline(1030,225,1030,75)
            self.draw_Oline(1450,385,1125,385)
            self.draw_Oline(1125,385,1125,225)
            self.draw_Oline(1125,225,1030,225)
            self.draw_Oline(1450,240,1355,240)
            self.draw_Oline(1355,240,1355,175)
            self.draw_Oline(1355,175,1125,175)
            self.draw_Oline(1125,175,1125,75)
            self.draw_Oline(1125,75,1100,75)
            
            #addition
            self.draw_Oline(0,240,100,240)
            self.draw_Oline(100,240,100,270)
            self.draw_Oline(100,270,215,270)
            self.draw_Oline(215,270,215,170)
            self.draw_Oline(215,170,320,170)
            
        elif number==9:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,425)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            
            #Bar w/ cove
            self.draw_Oline(750,425,750,75)
            self.draw_Oline(750,200,450,200)
            self.draw_Oline(450,200,450,380)
            self.draw_Oline(450,380,350,380)
            self.draw_Oline(350,380,350,5)

            
            #4 servers on dining
            self.draw_Oline(1030,425,1030,225)
            self.draw_Oline(1100,75,1075,75)
            self.draw_Oline(1450,585,1350,585)
            self.draw_Oline(1350,585,1350,410)
            self.draw_Oline(1350,410,1250,410)
            self.draw_Oline(1250,410,1250,670)
            self.draw_Oline(1250,670,1125,670)
            self.draw_Oline(1030,225,1030,75)
            self.draw_Oline(1450,385,1125,385)
            self.draw_Oline(1125,385,1125,225)
            self.draw_Oline(1125,225,1030,225)
            self.draw_Oline(1450,240,1320,240)
            self.draw_Oline(1320,240,1320,195)
            self.draw_Oline(1320,195,1125,195)
            self.draw_Oline(1125,195,1125,75)
            self.draw_Oline(1125,75,1100,75)

            #addition
            self.draw_Oline(0,310,100,310)
            self.draw_Oline(100,310,100,375)
            self.draw_Oline(100,375,215,375)
            self.draw_Oline(215,375,215,270)
            self.draw_Oline(215,270,350,270)
            self.draw_Oline(0,160,100,160)
            self.draw_Oline(100,160,100,185)
            self.draw_Oline(100,185,350,185)
        
        elif number==1:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,380)
            self.draw_Oline(1030,425,1030,75)
            self.draw_Oline(750,380,450,380)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
            self.draw_Oline(1450,400,1125,400)
            self.draw_Oline(1125,400,1125,425)
            self.draw_Oline(450,380,350,380)
            self.draw_Oline(350,380,350,5)
            
            
            
            
        elif number==2:
            #Outline
            self.draw_Oline(0,5,500,5)
            self.draw_Oline(500,5,500,75)
            self.draw_Oline(500,75,1075,75)
            self.draw_Oline(1075,75,1075,5)
            self.draw_Oline(1075,5,1450,5)
            self.draw_Oline(1450,5,1450,775)
            self.draw_Oline(1450,775,1125,775)
            self.draw_Oline(1125,775,1125,425)
            self.draw_Oline(1125,425,1030,425)
            self.draw_Oline(1030,425,750,380)
            self.draw_Oline(1030,425,1030,75)
            self.draw_Oline(750,380,450,380)
            self.draw_Oline(450,380,450,475)
            self.draw_Oline(450,475,5,475)
            self.draw_Oline(5,475,0,5)
           

            
            

    def draw_Oline(self, x1, y1, x2, y2):

        # Draw the line and store the reference
        line = self.canvas.create_line(x1, y1, x2, y2, width=5, fill="black")
        self.lines.append(line)


    def show_text_input_popup(self, number):
        """Show a popup for text input, prompting for a number of words equal to the number pressed."""
        popup = tk.Toplevel(self.root)
        
        # Ensure the popup stays on top of the main window
        popup.attributes("-topmost", True)
        
        popup.title(f"Enter {number} Names")

        instructions = tk.Label(
            popup, text=f"Please enter exactly {number} server names. Each person has their own box.\n\nSet Dining closer as Server 1, Bar closer as Server 2, Zeppelin closer Server 3, Addition closer server 7 (if applicable), then the rest.", font=("Arial", 12), wraplength=300
        )
        instructions.grid(row=0, column=0, columnspan=2, padx=10, pady=10)

        # Create entry boxes for each word
        entry_boxes = []
        for i in range(number):
            tk.Label(popup, text=f"Server {i+1}:").grid(row=i + 1, column=0, padx=5, pady=5, sticky="e")
            entry = tk.Entry(popup, width=30)
            entry.grid(row=i + 1, column=1, padx=5, pady=5)
            entry_boxes.append(entry)

        def submit_text():
            words = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
            words = [entry.get().strip() for entry in entry_boxes]
            if all(words) and len(words) == number:
                self.servers = words  # Store the names entered
                self.display_server_names(words, number)  # Display names in the GUI
                messagebox.showinfo("Success", f"You entered the words: {', '.join(words)}")
                popup.destroy()
            else:
                messagebox.showerror("Error", f"Please fill all {number} word(s).")

        submit_button = tk.Button(popup, text="Submit", command=submit_text, bg="green")
        submit_button.grid(row=number + 1, column=0, padx=10, pady=10)

        cancel_button = tk.Button(popup, text="Cancel", command=popup.destroy, bg="red", fg="white")
        cancel_button.grid(row=number + 1, column=1, padx=10, pady=10)

    def display_server_names(self, words, number):
        """Display the entered server names on the GUI."""
        # You can customize the location based on your grid
        if number==4:
            server_positions = [
                (0, 43),  # Server 1 (Dining Closer)
                (2, 13),  # Server 2 (Bar Closer)
                (18, 35), # Server 3 (Zeppelin Closer)
                (6, 43),  # Server 4
                #(3, 43),  # Server 5 
                #(3, 28),  # Server 6 
                #(4, 17),  # Server 7(Addition Closer)
                #(1, 3),   # Server 8
                #(3, 3),   # Server 9
            ]
        elif number==5:
            server_positions = [
                (0, 43),  # Server 1 (Dining Closer)
                (2, 13),  # Server 2 (Bar Closer)
                (18, 35), # Server 3 (Zeppelin Closer)
                (6, 43),  # Server 4
                (3, 43),  # Server 5 
                #(3, 28),  # Server 6 
                #(4, 17),  # Server 7(Addition Closer)
                #(1, 3),   # Server 8
                #(3, 3),   # Server 9
            ]
        elif number==6:
            server_positions = [
                (0, 43),  # Server 1 (Dining Closer)
                (2, 13),  # Server 2 (Bar Closer)
                (18, 35), # Server 3 (Zeppelin Closer)
                (5, 43),  # Server 4
                (3, 43),  # Server 5 
                (4, 27),  # Server 6 
                #(4, 17),  # Server 7(Addition Closer)
                #(1, 3),   # Server 8
                #(3, 3),   # Server 9
            ]
        elif number==7:
            server_positions = [
                (0, 43),  # Server 1 (Dining Closer)
                (2, 13),  # Server 2 (Bar Closer)
                (18, 35), # Server 3 (Zeppelin Closer)
                (5, 43),  # Server 4
                (1, 6),  # Server 5 
                (4, 27),  # Server 6 
                (5, 1),  # Server 7 (Addition Closer)
                #(1, 3),   # Server 8
                #(3, 3),   # Server 9
            ]
        elif number==8:
            server_positions = [
                (0, 43),  # Server 1 (Dining Closer)
                (2, 13),  # Server 2 (Bar Closer)
                (18, 35), # Server 3 (Zeppelin Closer)
                (5, 43),  # Server 4
                (3, 43),  # Server 5 
                (4, 27),  # Server 6 
                (5, 1),  # Server 7 (Addition Closer)
                (1, 6),   # Server 8
                #(3, 3),   # Server 9
            ]
        elif number==9:
            server_positions = [
                (0, 43),  # Server 1 (Dining Closer)
                (2, 13),  # Server 2 (Bar Closer)
                (18, 35), # Server 3 (Zeppelin Closer)
                (5, 43),  # Server 4
                (3, 43),  # Server 5 
                (4, 27),  # Server 6 
                (5, 1),  # Server 7 (Addition Closer)
                (1, 6),   # Server 8
                (2, 7),   # Server 9
            ]
        # Iterate over the server names and positions, creating labels as needed
        for i, word in enumerate(words):
            if i < len(server_positions):
                row, col = server_positions[i]
                label = tk.Label(self.root, text=word, font=("Arial", 16), fg = "red")
                label.grid(row=row, column=col, padx=1, pady=1, sticky="w")
                self.server_labels.append(label)  # Store label to remove later

    def update_button_colors(self):
        """Periodically updates button colors based on elapsed time."""
        for button_text, data in self.buttons_data.items():
            widget = self.buttons_widgets[button_text]
            start_time = data["start_time"]
            if start_time:
                elapsed_time = time.time() - start_time
                if elapsed_time < 5:
                    color = self.default_colors["green"]
                elif elapsed_time < 10:
                    color = self.default_colors["yellow"]
                elif elapsed_time < 15:
                    color = self.default_colors["orange"]
                else:
                    color = self.default_colors["red"]
            else:
                color = self.default_colors["default"]

            if isinstance(widget, tk.Canvas):
                widget.itemconfig(widget.find_all()[0], fill=color)
            else:
                widget.config(bg=color)

        # Schedule the next color update
        self.root.after(100, self.update_button_colors)

# Create the main window
root = tk.Tk()

# Initialize the TimerApp class
app = TimerApp(root)

# Run the Tkinter event loop
root.mainloop()
