#######
listing
#######

.. raw:: html

   <dl class="class">
   <dt id="api.listing.Listing">
   <em class="property">class </em><code class="descclassname">api.listing.</code><code class="descname">Listing</code><a class="headerlink" href="#api.listing.Listing" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_restful.Resource</span></code></p>
   <p>The Listing object handles API requests such as Get/Post/Delete/Put.</p>
   <dl class="attribute">
   <dt>
   <code class="descname">none.</code></dt>
   <dd></dd></dl>

   <dl class="classmethod">
   <dt id="api.listing.Listing.as_view">
   <em class="property">classmethod </em><code class="descname">as_view</code><span class="sig-paren">(</span><em>name</em>, <em>*class_args</em>, <em>**class_kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.Listing.as_view" title="Permalink to this definition">¶</a></dt>
   <dd><p>Converts the class into an actual view function that can be used
   with the routing system.  Internally this generates a function on the
   fly which will instantiate the <code class="xref py py-class docutils literal notranslate"><span class="pre">View</span></code> on each request and call
   the <a class="reference internal" href="#api.listing.Listing.dispatch_request" title="api.listing.Listing.dispatch_request"><code class="xref py py-meth docutils literal notranslate"><span class="pre">dispatch_request()</span></code></a> method on it.</p>
   <p>The arguments passed to <a class="reference internal" href="#api.listing.Listing.as_view" title="api.listing.Listing.as_view"><code class="xref py py-meth docutils literal notranslate"><span class="pre">as_view()</span></code></a> are forwarded to the
   constructor of the class.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.Listing.decorators">
   <code class="descname">decorators</code><em class="property"> = ()</em><a class="headerlink" href="#api.listing.Listing.decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.Listing.delete">
   <code class="descname">delete</code><span class="sig-paren">(</span><em>ids</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.Listing.delete" title="Permalink to this definition">¶</a></dt>
   <dd><p>Deletes a listing from the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>ids</strong> (<em>str</em>) – The id of the listing being deleted.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">What happened with the delete call.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">message</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.Listing.dispatch_request">
   <code class="descname">dispatch_request</code><span class="sig-paren">(</span><em>*args</em>, <em>**kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.Listing.dispatch_request" title="Permalink to this definition">¶</a></dt>
   <dd><p>Subclasses have to override this method to implement the
   actual view function code.  This method is called with all
   the arguments from the URL rule.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.Listing.get">
   <code class="descname">get</code><span class="sig-paren">(</span><em>ids</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.Listing.get" title="Permalink to this definition">¶</a></dt>
   <dd><p>Get request, looking for all listings matching an id in ids.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>ids</strong> (<em>str</em><em>[</em><em>]</em>) – A list of ids to query with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified listings.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.Listing.method_decorators">
   <code class="descname">method_decorators</code><em class="property"> = []</em><a class="headerlink" href="#api.listing.Listing.method_decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.listing.Listing.methods">
   <code class="descname">methods</code><em class="property"> = set(['PUT', 'POST', 'DELETE', 'GET'])</em><a class="headerlink" href="#api.listing.Listing.methods" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.listing.Listing.parser">
   <code class="descname">parser</code><em class="property"> = &lt;flask_restful.reqparse.RequestParser object&gt;</em><a class="headerlink" href="#api.listing.Listing.parser" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.Listing.post">
   <code class="descname">post</code><span class="sig-paren">(</span><em>ids</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.Listing.post" title="Permalink to this definition">¶</a></dt>
   <dd><p>Posts a listing to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>ids</strong> (<em>str</em>) – The listing id of the listing being posted.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">What happened with the post call.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">message</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.Listing.provide_automatic_options">
   <code class="descname">provide_automatic_options</code><em class="property"> = None</em><a class="headerlink" href="#api.listing.Listing.provide_automatic_options" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.Listing.put">
   <code class="descname">put</code><span class="sig-paren">(</span><em>listing_id</em>, <em>price</em>, <em>condition</em>, <em>isbn</em>, <em>google_tok</em>, <em>status</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.Listing.put" title="Permalink to this definition">¶</a></dt>
   <dd><p>Either posts listing to database, or updates it.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><ul class="first simple">
   <li><strong>listing_id</strong> (<em>int</em>) – An id to represent the listing, generated by the table.</li>
   <li><strong>price</strong> (<em>float</em>) – The price of the listing.</li>
   <li><strong>condition</strong> (<em>str</em>) – The condition of the listing.</li>
   <li><strong>isbn</strong> (<em>int</em>) – The isbn of the listing.</li>
   <li><strong>google_tok</strong> (<em>str</em>) – The google token of the user who made the posting.</li>
   <li><strong>status</strong> (<em>str</em>) – The status of the listing.</li>
   </ul>
   </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body"><p class="first">A jsonified listing object representing what was put.</p>
   </td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body"><p class="first last">json</p>
   </td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.Listing.representations">
   <code class="descname">representations</code><em class="property"> = None</em><a class="headerlink" href="#api.listing.Listing.representations" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   </dd></dl>

   <dl class="class">
   <dt id="api.listing.ListingModel">
   <em class="property">class </em><code class="descclassname">api.listing.</code><code class="descname">ListingModel</code><span class="sig-paren">(</span><em>price</em>, <em>condition</em>, <em>isbn</em>, <em>google_tok</em>, <em>status</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">sqlalchemy.ext.declarative.api.Model</span></code></p>
   <p>The ListingModel object stores information about the listing, as well as
   the book and user objects associated with it.</p>
   <dl class="attribute">
   <dt id="api.listing.ListingModel.listing_id">
   <code class="descname">listing_id</code><a class="headerlink" href="#api.listing.ListingModel.listing_id" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>int</em> – An id to represent the listing, generated by the table.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.price">
   <code class="descname">price</code><a class="headerlink" href="#api.listing.ListingModel.price" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>float</em> – The price of the listing.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.condition">
   <code class="descname">condition</code><a class="headerlink" href="#api.listing.ListingModel.condition" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The condition of the listing.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.isbn">
   <code class="descname">isbn</code><a class="headerlink" href="#api.listing.ListingModel.isbn" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>int</em> – The isbn of the listing.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.book">
   <code class="descname">book</code><a class="headerlink" href="#api.listing.ListingModel.book" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>BookModel</em> – The book being represented by the listing.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.google_tok">
   <code class="descname">google_tok</code><a class="headerlink" href="#api.listing.ListingModel.google_tok" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The google token of the user who made the posting.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.user">
   <code class="descname">user</code><a class="headerlink" href="#api.listing.ListingModel.user" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>UserModel</em> – The user who made the posting.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.status">
   <code class="descname">status</code><a class="headerlink" href="#api.listing.ListingModel.status" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The status of the listing.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.timestamp">
   <code class="descname">timestamp</code><a class="headerlink" href="#api.listing.ListingModel.timestamp" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>int</em> – The time the listing was posted.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.bare_json">
   <code class="descname">bare_json</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.bare_json" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a json object representing the listing.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A jsonified listing.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">book</code></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.bu_bare_json">
   <code class="descname">bu_bare_json</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.bu_bare_json" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a json object representing the listing. Used when
   going from books to users.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A jsonified listing.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">condition</code></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.delete_from_db">
   <code class="descname">delete_from_db</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.delete_from_db" title="Permalink to this definition">¶</a></dt>
   <dd><p>deletes the listing to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">none.</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="classmethod">
   <dt id="api.listing.ListingModel.find_by_isbn">
   <em class="property">classmethod </em><code class="descname">find_by_isbn</code><span class="sig-paren">(</span><em>isbn</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.find_by_isbn" title="Permalink to this definition">¶</a></dt>
   <dd><p>Finds all listings matching an isbn.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>isbn</strong> (<em>int</em>) – The isbn to search with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of listings.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body"><a class="reference internal" href="#api.listing.ListingModel" title="api.listing.ListingModel">ListingModel</a>[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="classmethod">
   <dt id="api.listing.ListingModel.find_by_listing_id">
   <em class="property">classmethod </em><code class="descname">find_by_listing_id</code><span class="sig-paren">(</span><em>listing_id</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.find_by_listing_id" title="Permalink to this definition">¶</a></dt>
   <dd><p>Finds all listings matching a listing id.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>listing_id</strong> (<em>int</em>) – The listing id to search for.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of listings.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body"><a class="reference internal" href="#api.listing.ListingModel" title="api.listing.ListingModel">ListingModel</a>[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">google_tok</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">isbn</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">listing_id</code></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.listing_json_w_book">
   <code class="descname">listing_json_w_book</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.listing_json_w_book" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns the listing jsonified, with a reference to the book being
   represented.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A jsonified listing.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.listing_json_w_book_and_user">
   <code class="descname">listing_json_w_book_and_user</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.listing_json_w_book_and_user" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns the listing jsonified, with a reference to the book being
   represented and the user who posted it.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A jsonified listing.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.listing_json_w_user">
   <code class="descname">listing_json_w_user</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.listing_json_w_user" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns the listing jsonified, with a reference to the user who posted.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A jsonified listing.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.metadata">
   <code class="descname">metadata</code><em class="property"> = MetaData(bind=None)</em><a class="headerlink" href="#api.listing.ListingModel.metadata" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">price</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.listing.ListingModel.query_class">
   <code class="descname">query_class</code><a class="headerlink" href="#api.listing.ListingModel.query_class" title="Permalink to this definition">¶</a></dt>
   <dd><p>alias of <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_sqlalchemy.BaseQuery</span></code></p>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.ListingModel.save_to_db">
   <code class="descname">save_to_db</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.ListingModel.save_to_db" title="Permalink to this definition">¶</a></dt>
   <dd><p>Saves the listing to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">none.</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">status</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">timestamp</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">user</code></dt>
   <dd></dd></dl>

   </dd></dl>

   <dl class="class">
   <dt id="api.listing.allListings">
   <em class="property">class </em><code class="descclassname">api.listing.</code><code class="descname">allListings</code><a class="headerlink" href="#api.listing.allListings" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_restful.Resource</span></code></p>
   <p>The allListings object handles the entire list of listings in the database.</p>
   <dl class="attribute">
   <dt>
   <code class="descname">none.</code></dt>
   <dd></dd></dl>

   <dl class="classmethod">
   <dt id="api.listing.allListings.as_view">
   <em class="property">classmethod </em><code class="descname">as_view</code><span class="sig-paren">(</span><em>name</em>, <em>*class_args</em>, <em>**class_kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.allListings.as_view" title="Permalink to this definition">¶</a></dt>
   <dd><p>Converts the class into an actual view function that can be used
   with the routing system.  Internally this generates a function on the
   fly which will instantiate the <code class="xref py py-class docutils literal notranslate"><span class="pre">View</span></code> on each request and call
   the <a class="reference internal" href="#api.listing.allListings.dispatch_request" title="api.listing.allListings.dispatch_request"><code class="xref py py-meth docutils literal notranslate"><span class="pre">dispatch_request()</span></code></a> method on it.</p>
   <p>The arguments passed to <a class="reference internal" href="#api.listing.allListings.as_view" title="api.listing.allListings.as_view"><code class="xref py py-meth docutils literal notranslate"><span class="pre">as_view()</span></code></a> are forwarded to the
   constructor of the class.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.allListings.decorators">
   <code class="descname">decorators</code><em class="property"> = ()</em><a class="headerlink" href="#api.listing.allListings.decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.listing.allListings.dispatch_request">
   <code class="descname">dispatch_request</code><span class="sig-paren">(</span><em>*args</em>, <em>**kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.allListings.dispatch_request" title="Permalink to this definition">¶</a></dt>
   <dd><p>Subclasses have to override this method to implement the
   actual view function code.  This method is called with all
   the arguments from the URL rule.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.listing.allListings.get">
   <code class="descname">get</code><span class="sig-paren">(</span><em>search</em><span class="sig-paren">)</span><a class="headerlink" href="#api.listing.allListings.get" title="Permalink to this definition">¶</a></dt>
   <dd><p>Gets a list of all listings in database that match a search.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>search</strong> (<em>str</em><em>[</em><em>]</em>) – A list of search terms defining what to search with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified listings that match the search result.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.listing.allListings.method_decorators">
   <code class="descname">method_decorators</code><em class="property"> = []</em><a class="headerlink" href="#api.listing.allListings.method_decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.listing.allListings.methods">
   <code class="descname">methods</code><em class="property"> = set(['GET'])</em><a class="headerlink" href="#api.listing.allListings.methods" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.listing.allListings.provide_automatic_options">
   <code class="descname">provide_automatic_options</code><em class="property"> = None</em><a class="headerlink" href="#api.listing.allListings.provide_automatic_options" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.listing.allListings.representations">
   <code class="descname">representations</code><em class="property"> = None</em><a class="headerlink" href="#api.listing.allListings.representations" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   </dd></dl>
